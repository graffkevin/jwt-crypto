import { decodeToken } from '../src/main';
import { validateAndDecodeToken } from '../src/main';

describe('decodeNoVerifyToken tests', () => {
    it('should decode a token without verifying the signature', () => {
        const basicEncodedJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I';
        const payload = decodeToken(basicEncodedJwt);

        expect(payload).toBeDefined()
    });

    it('should throw an error for invalid token format', () => {
        const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMyIsImVudGl0eV9pZCI6MTEyOTcsInNjb3BlIjpbIm5ld19vcmRlciIsIm9yZGVycyIsIm92ZXJ2aWV3IiwiZWRpdF9kZWxpdmVyeV9hbmRfcmV0dXJuIiwiZWRpdF9kYXRlcyIsImFkZF9hbmRfZWRpdF9ldmVudCIsInNlYXJjaCIsImRhc2hib2FyZCIsImJpbGxpbmciLCJwYXJ0bmVycyIsInJlZmVyZW5jZXMiLCJhbmFseXRpYyIsInNldHRpbmdzIiwiZmlsZXMiLCJjYW5jZWxfc291cmNpbmciLCJlZGl0X2VxdWlwbWVudCIsImVkaXRfYWRkaXRpb25hbF9pbmZvcm1hdGlvbiIsImVkaXRfb3JkZXJfc3VtbWFyeSIsImRlbGV0ZV91c2VyIiwibm90ZXMiLCJzZWFyY2hfc3VwcGxpZXIiLCJvZmZlcl9yZWNlaXZlZCJdLCJleHAiOjE3MTkzNTI5OTJ9.hktdCGaWfuo0vh-LwzQyEIYLHuJcX1X78ozaSWOnpwU";
        const payload = decodeToken(String(invalidToken));
        console.log("payload", payload);

        expect(payload).toBeUndefined();
    });
});

describe('decodeVerifyToken tests', () => {
    it('should decode a token and verify the signature', async () => {
        const basicEncodedJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I';
        const secretKey = 'your_secret_key';
        const payload = await validateAndDecodeToken(basicEncodedJwt, secretKey);

        expect(payload).toBeDefined();
    });

    it('should throw an error for invalid token format', async () => {
        const invalidToken = 'invalid.token.format';
        const secretKey = 'your_secret_key';

        await expect(validateAndDecodeToken(invalidToken, secretKey)).rejects.toThrow( "The string to be decoded contains invalid characters.");
    });

    it('should throw an error for invalid token signature', async () => {
        const invalidSignatureToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.invalidsignature';
        const secretKey = 'your_secret_key';

        await expect(validateAndDecodeToken(invalidSignatureToken, secretKey)).rejects.toThrow('Invalid signature');
    });
});
