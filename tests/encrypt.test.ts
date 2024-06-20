import { encodeToken } from '../src/main';

describe('encodeToken tests', () => {
    it('should encrypt a payload', async () => {
        const payload = { user: 'john.doe', role: 'admin' };
        const secretKey = 'your_secret_key';
        const encryptedToken = await encodeToken(payload, secretKey);

        expect(encryptedToken).toBeDefined();
    });
});
