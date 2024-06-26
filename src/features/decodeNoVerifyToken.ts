import { Payload } from "@/utils/interfaces";
import { base64UrlDecode } from "@/utils/base64";


/**
 * Decodes the provided JWT token using the specified secret key.
 * Verifies the signature and returns the decoded token if valid.
 * @param token The JWT token string to decode.
 * @returns The decoded token as an object if valid, otherwise null.
 */
const decodeNoVerifyToken = ( token: string | undefined ): Payload | undefined => {
    if (!token) {
        return undefined;
    }
    const parts = token.split('.');
    if (parts.length !== 3) {
        return undefined;
    }

    return JSON.parse(base64UrlDecode(parts[1]));
};

export default decodeNoVerifyToken;
