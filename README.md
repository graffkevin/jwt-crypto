# jwt-crypto

**Version:** 1.1.2

## Description

jwt-crypto is a JavaScript library for encoding, decoding, signing, and verifying JWT tokens. It is designed for use in Node.js projects and front-end applications.

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
const token = sign({ foo: 'bar' }, 'your-256-bit-secret');
console.log(token);

const decoded = verify(token, 'your-256-bit-secret');
console.log(decoded);
```

## API

### encodeToken(payload, secret)
```TypeScript
encodeToken(payload: object, secret: string): Promise<string>
```
Encodes a payload into a JWT token (async).

### decode(token)
```TypeScript
decode(token: string): object
```
Decodes a JWT token (sync).

### signToken(payload, secret)
```TypeScript
signToken(payload: object, secret: string): Promise<object>
```
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