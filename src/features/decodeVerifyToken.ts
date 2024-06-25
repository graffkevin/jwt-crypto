import { Payload } from "../utils/interfaces";
import { base64UrlDecode } from "../utils/base64";

/**
 * Verifies the HMAC SHA-256 signature for the provided data using the given key.
 * @param key The secret key used for HMAC signing.
 * @param data The data to be verified.
 * @param expectedSignature The expected Base64-URL encoded HMAC SHA-256 signature.
 * @returns true if the signature matches, false otherwise.
 */
const verifyHmacSha256Signature = async (key: string, data: string, expectedSignature: string): Promise<boolean> => {
    const encoder = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey("raw", encoder.encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    const signature = Uint8Array.from(Buffer.from(expectedSignature, 'base64url'));

    return crypto.subtle.verify("HMAC", cryptoKey, signature, encoder.encode(data));
};


/**
 * Decodes the provided JWT token using the specified secret key.
 * Verifies the signature and returns the decoded token if valid.
 * @param token The JWT token string to decode.
 * @param secretKey The secret key used for HMAC SHA-256 signing.
 * @returns The decoded token as an object if valid, otherwise null.
 */
const decodeVerifyToken = async (token: string, secretKey: string): Promise<Payload | undefined> => {
    const parts = token.split('.');
    const [headerEncoded, payloadEncoded, signature] = parts;
    if (parts.length !== 3) {
        return;
    }
    const payload = JSON.parse(base64UrlDecode(payloadEncoded));
    const dataToVerify = `${headerEncoded}.${payloadEncoded}`
    const verifiedSignIn = await verifyHmacSha256Signature(secretKey, dataToVerify, signature);

    if (!verifiedSignIn) {
        throw new Error('Invalid signature');
    }

    return payload;
};

export default decodeVerifyToken;
