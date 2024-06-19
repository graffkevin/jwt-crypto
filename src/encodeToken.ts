interface Payload {
  [key: string]: string | number | Record<string, unknown> | Array<string>;
}

/**
 * Encodes the input string to Base64-URL format. This is a URL-safe encoding that does not require padding.
 * @param input
 */
const base64UrlEncode = (input: string): string => btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

/**
 * Creates HMAC SHA-256 signature for the provided data using the given key.
 * @param key The secret key used for HMAC signing.
 * @param data The data to be signed.
 * @returns A Promise resolving to the Base64-URL encoded HMAC SHA-256 signature.
 */
const createHmacSha256Signature = async (key: string, data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey("raw", encoder.encode(key), { hash: "SHA-256", name: "HMAC" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(data));

  return base64UrlEncode(String.fromCharCode(...new Uint8Array(signature)));
};

/**
 * Encodes the provided payload into a JWT token using the specified secret key.
 * The payload is serialized to JSON, Base64-URL encoded, and signed using HMAC SHA-256.
 * @param payload The payload object to be encoded into the JWT token.
 * @param secretKey The secret key used for HMAC SHA-256 signing.
 * @returns A Promise resolving to the encoded JWT token string.
 */
const encodeToken = async (payload: Payload, secretKey: string): Promise<string> => {
  const header = { alg: "HS256", typ: "JWT" };
  const headerEncoded = base64UrlEncode(JSON.stringify(header));
  const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
  const dataToSign = `${headerEncoded}.${payloadEncoded}`;
  const signature = await createHmacSha256Signature(secretKey, dataToSign);

  return `${dataToSign}.${signature}`;
};

export default encodeToken;
