/**
 * Decodes a Base64-URL encoded string.
 * @param input The Base64-URL encoded string to decode.
 */
export const base64UrlDecode = (input: string): string => {
    input = input.replace(/-/g, '+').replace(/_/g, '/');
    const padding = input.length % 4;
    if (padding) {
        input += '='.repeat(4 - padding);
    }

    return atob(input);
};

/**
 * Encodes the input string to Base64-URL format. This is a URL-safe encoding that does not require padding.
 * @param input
 */
export const base64UrlEncode = (input: string): string => btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
