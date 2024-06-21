export interface DecodedToken {
    header: object | undefined;
    payload: object | undefined;
}

export interface Payload {
    [key: string]: string | number | Record<string, unknown> | Array<string>;
}
