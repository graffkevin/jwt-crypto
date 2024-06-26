# jwt-crypto

Encrypt and decrypt JSON Web Tokens (JWTs) securely using strong encryption algorithms such as AES, RSA, and HMAC. This library enhances JWT security in authentication systems by ensuring data confidentiality.

## Installation

You can install `jwt-crypto` using npm or yarn.

## GitHub Repository
https://github.com/graffkevin/jwt-crypto

### npm

```bash
npm install jwt-crypto
```

### yarn

```bash
yarn add jwt-crypto
```

## Usage
Usage

### Encrypt a JWT


### Encrypt with private key (async)
```typescript
import { encodeToken } from "jwt-crypto";

const PAYLOAD = {
  sub: "1234567890",
  name: "John Doe",
  iat: 1516239022,
};

const superSecretKey = "super-secret";
const token = await encodeToken(PAYLOAD, superSecretKey);

console.log("token:", token);
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.3Jv5"
```

### Decrypt a JWT without verification (sync)

```typescript
import { decodeToken } from "jwt-crypto";

const basicEncodedJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I';
const payload = decodeToken(basicEncodedJwt);

console.log("payload:", payload);
// payload: { user: 'john.doe', role: 'admin' }
```

### Decrypt a JWT with verification (async)

```typescript
import { validateAndDecodeToken } from "jwt-crypto";

const basicEncodedJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I';
const secretKey = 'your_secret_key';
const payload = await validateAndDecodeToken(basicEncodedJwt, secretKey);

console.log("payload:", payload);
// payload: { user: 'john.doe', role: 'admin' }
```

### License
This project is licensed under the MIT License - see the LICENSE file for details.
