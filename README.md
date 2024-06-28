# jwt-crypto

**Version:** 1.1.3

## Description

jwt-crypto is a JavaScript library for encoding, decoding, signing, and verifying JWT tokens. It is designed for use in Node.js projects and front-end applications.

## GitHub
https://github.com/graffkevin/jwt-crypto

## Installation

Use npm to install the package:
```bash
npm install jwt-crypto
```

use yarn to install the package:
```bash
yarn add jwt-crypto
```

## Usage

Here is an example of how to use jwt-crypto:

```TypeScript
import { encode, decode, sign, verify } from 'jwt-crypto';

// Example usage
const token = await encodeToken({ foo: 'bar' }, 'your-256-bit-secret');
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I'

const decodedSignToken = await signToken(token, 'your-256-bit-secret');
console.log(decoded);
// { foo: 'bar' }

const decodedToken = decodeToken(token);
console.log(decodedToken);
// { foo: 'bar' }
```

## API

### encodeToken(payload, secret)
encodeToken(payload, secret) - Promise<string>
Encodes a payload into a JWT token (async).

### decode(token)
decode(token) - object
Decodes a JWT token (sync).

### signToken(payload, secret)
signToken(payload, secret) - Promise<object>
Signs a payload and returns a signed JWT token (async).

## Scripts

- `clean`: rm -rf dist
- `build`: tsc && vite build
- `test`: vitest

## Keywords

jwt, encode, decode, sign, token, verify, npm, javascript

## Contributions

Contributions are welcome. Please submit a PR or open an issue on GitHub.

## License

This project is licensed under the MIT License.

## Author
Kevin Graff