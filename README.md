# jwt-crypto

Encrypt and decrypt JSON Web Tokens (JWTs) securely using strong encryption algorithms such as AES, RSA, and HMAC. This library enhances JWT security in authentication systems by ensuring data confidentiality.

## Installation

You can install `jwt-crypto` using npm or yarn.

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

```typescript
import { encrypt } from "jwt-crypto";

const PAYLOAD = {
  sub: "1234567890",
  name: "John Doe",
  iat: 1516239022,
};

const superSecretKey = "super-secret";
const token = await encodeToken(PAYLOAD, superSecretKey);

// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.3Jv5"
```