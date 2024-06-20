const encodeToken  = require('jwt-crypto');

describe('Encryption tests', () => {
    it('should encrypt a payload', async () => {
        const payload = { user: 'john.doe', role: 'admin' };
        const secretKey = 'your_secret_key';

        const encryptedToken = await encodeToken(payload, secretKey);

        expect(encryptedToken).toBeDefined();
        // Add more assertions as needed
    });

    // Add more test cases for different scenarios
});
