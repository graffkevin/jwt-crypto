export interface DecodedToken {
    header: object;
    payload: object;
}

export interface Payload {
    [key: string]: string | number | Record<string, unknown> | Array<string>;
}
