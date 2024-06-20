import { DecodedToken } from "@/utils/interfaces";
import { base64UrlDecode } from "@/utils/base64";

/**
 * Verifies the HMAC SHA-256 signature for the provided data using the given key.
 * @param key The secret key used for HMAC signing.
 * @param data The data to be verified.
 * @param expectedSignature The expected Base64-URL encoded HMAC SHA-256 signature.
 * @returns true if the signature matches, false otherwise.
 */
const verifyHmacSha256Signature = async (key: string, data: string, expectedSignature: string): Promise<boolean> => {
    const encoder = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey("raw", encoder.encode(key), { hash: "SHA-256", name: "HMAC" }, false, ["verify"]);
    const signature = Uint8Array.from(atob(expectedSignature), c => c.charCodeAt(0));

    return crypto.subtle.verify("HMAC", cryptoKey, encoder.encode(data), signature);
};

/**
 * Decodes the provided JWT token using the specified secret key.
 * Verifies the signature and returns the decoded token if valid.
 * @param token The JWT token string to decode.
 * @param secretKey The secret key used for HMAC SHA-256 signing.
 * @returns The decoded token as an object if valid, otherwise null.
 */
const decodeVerifyToken = async (token: string, secretKey: string): Promise<DecodedToken | null> => {
    const parts = token.split('.');
    if (parts.length !== 3) {
        return null;
    }

    const [headerEncoded, payloadEncoded, signature] = parts;

    const header = JSON.parse(base64UrlDecode(headerEncoded));
    const payload = JSON.parse(base64UrlDecode(payloadEncoded));
    const dataToVerify = `${headerEncoded}.${payloadEncoded}`;
    const verifiedSignIn = await verifyHmacSha256Signature(secretKey, dataToVerify, signature);

    if (!verifiedSignIn) {
        return null;
    }

    return {
        header,
        payload
    };
};

export default decodeVerifyToken;
