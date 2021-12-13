export interface Options {
    displayErrors: boolean;
}
export interface Error {
    message: string;
    detail: {
        isIncludeNumber: boolean;
        isIncludeString: boolean;
        isMinimunCharacter: boolean;
    };
}
declare const isPassword: (str: string, options?: Options) => boolean | Error;
export default isPassword;
