declare module 'jwt-crypto' {
    export function encrypt(payload: any, secretOrPrivateKey: string, options?: any): Promise<string>;
}
