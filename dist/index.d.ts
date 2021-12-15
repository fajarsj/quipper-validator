import { Options as OptionsIsEmpty } from "./lib/isEmpty";
import { Response as ResponseIsPasswordValidation } from "./lib/isPasswordValidation";
import { Options as OptionsIsLength } from "./lib/isLength";
interface Validator {
    isEmail: (str: string) => boolean;
    isEmpty: (str: string, options?: OptionsIsEmpty) => boolean;
    isUsername: (str: string) => boolean;
    isPassword: (str: string) => boolean;
    isPasswordValidation: (str: string) => ResponseIsPasswordValidation;
    isIncludeNumber: (str: string) => boolean;
    isIncludeString: (str: string) => boolean;
    isLength: (str: string, options?: OptionsIsLength) => boolean;
}
declare const validator: Validator;
export default validator;
