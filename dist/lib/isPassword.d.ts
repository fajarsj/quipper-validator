export interface Options {
    includeResponse: boolean;
}
export interface Response {
    isValid: boolean;
    message: string;
    detail: {
        isIncludeNumber: boolean;
        isIncludeString: boolean;
        isMinChar: boolean;
    };
}
declare const isPassword: (str: string, options?: Options) => boolean | Response;
export default isPassword;
