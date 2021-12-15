export interface Response {
    isValid: boolean;
    message: string;
    detail: {
        isIncludeNumber: boolean;
        isIncludeString: boolean;
        isMinChar: boolean;
    };
}
declare const isPasswordValidation: (str: string) => Response;
export default isPasswordValidation;
