import { decodeNoVerifyToken } from '../src/main';

describe('decodeNoVerifyToken tests', () => {
    it('should decode a token without verifying the signature', () => {
        const basicEncodedJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obi5kb2UiLCJyb2xlIjoiYWRtaW4ifQ.8KlhxV_jhfRw7oWoXky6a57CXrlTCSEu9JP2_E6Lj6I';
        const decodedToken = decodeNoVerifyToken(basicEncodedJwt);
        console.log(decodedToken)

        expect(decodedToken).toBeDefined();
    });
});
