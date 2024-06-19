# jwt-crypto
Encrypt and decrypt JSON Web Tokens (JWTs) securely. Utilizes strong encryption algorithms (AES, RSA, HMAC) for data confidentiality. Ideal for enhancing JWT security in authentication systems.

Encrypt is asynchronous and decrypt is synchronous. This is because encryption is computationally expensive and should be done on the server side. Decryption is computationally cheap and can be done on the client side.