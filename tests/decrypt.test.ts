import { decodeNoVerifyToken } from '../src/main';
import { decodeVerifyToken } from '../src/main';

describe('decodeNoVerifyToken tests', () => {
    it('should decode a token without verifying the signature', () => {
        const basicEncodedJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I';
        const decodedToken = decodeNoVerifyToken(basicEncodedJwt);
        if (!decodedToken) {
            return;
        }
        const { header, payload } = decodedToken;

        expect(header).toBeDefined();
        expect(payload).toBeDefined()
    });
});

describe('decodeVerifyToken tests', () => {
    it('should decode a token and verify the signature', async () => {
        const basicEncodedJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I';
        const secretKey = 'your_secret_key';
        const decodedToken = await decodeVerifyToken(basicEncodedJwt, secretKey);
        if (!decodedToken) {
            return Error("decodedToken is undefined");
        }
        const { header, payload } = decodedToken;
        expect(header).toBeDefined();
        expect(payload).toBeDefined();
    });

    it('should throw an error for invalid token format', async () => {
        const invalidToken = 'invalid.token.format';
        const secretKey = 'your_secret_key';
        await expect(decodeVerifyToken(invalidToken, secretKey)).rejects.toThrow( "Unexpected token '', \"{Ú'\" is not valid JSON");
    });

    it('should throw an error for invalid token signature', async () => {
        const invalidSignatureToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.invalidsignature';
        const secretKey = 'your_secret_key';
        await expect(decodeVerifyToken(invalidSignatureToken, secretKey)).rejects.toThrow('Invalid signature');
    });
});
