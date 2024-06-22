export interface Payload {
    [key: string]:
        | string
        | number
        | boolean
        | symbol
        | bigint
        | null
        | undefined
        | Function
        | Date
        | RegExp
        | Error
        | Record<string, unknown>
        | Array<string>
        | unknown;
}
