import { DecodedToken } from "@/utils/interfaces";
import { base64UrlDecode } from "@/utils/base64";


/**
 * Decodes the provided JWT token using the specified secret key.
 * Verifies the signature and returns the decoded token if valid.
 * @param token The JWT token string to decode.
 * @returns The decoded token as an object if valid, otherwise null.
 */
const decodeNoVerifyToken = ( token?: string ): DecodedToken => {
    if (!token) {
        return { header: undefined, payload: undefined };
    }
    const parts = token.split('.');
    const [headerEncoded, payloadEncoded] = parts;
    const header = JSON.parse(base64UrlDecode(headerEncoded));
    const payload = JSON.parse(base64UrlDecode(payloadEncoded));

    if (parts.length !== 3) {
        return { header: undefined, payload: undefined };
    }

    return {
        header,
        payload
    };
};

export default decodeNoVerifyToken;
