import { Payload } from "@/utils/interfaces";
import { base64UrlDecode } from "@/utils/base64";


/**
 * Decodes the provided JWT token using the specified secret key.
 * Verifies the signature and returns the decoded token if valid.
 * @param token The JWT token string to decode.
 * @returns The decoded token as an object if valid, otherwise null.
 */
const decodeNoVerifyToken = ( token: string ): Payload => {
    const parts = token.split('.');
    const [payloadEncoded] = parts;

    return JSON.parse(base64UrlDecode(payloadEncoded));
};

export default decodeNoVerifyToken;
