import { DecodedToken } from "@/utils/interfaces";
import { base64UrlDecode } from "@/utils/base64";


/**
 * Decodes the provided JWT token using the specified secret key.
 * Verifies the signature and returns the decoded token if valid.
 * @param token The JWT token string to decode.
 * @returns The decoded token as an object if valid, otherwise null.
 */
const decodeVerifyToken = ( token: string ): DecodedToken | null => {
    const parts = token.split('.');
    const [headerEncoded, payloadEncoded] = parts;
    const header = JSON.parse(base64UrlDecode(headerEncoded));
    const payload = JSON.parse(base64UrlDecode(payloadEncoded));

    if (parts.length !== 3) {
        return null;
    }

    return {
        header,
        payload
    };
};

export default decodeVerifyToken;
