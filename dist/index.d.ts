import { Options as OptionsIsEmpty } from "./lib/isEmpty";
import { Response as ResponseIsPasswordValidation } from "./lib/isPasswordValidation";
interface Validator {
    isEmail: (str: string) => boolean;
    isEmpty: (str: string, options?: OptionsIsEmpty) => boolean;
    isUsername: (str: string) => boolean;
    isPassword: (str: string) => boolean;
    isPasswordValidation: (str: string) => ResponseIsPasswordValidation;
}
declare const validator: Validator;
export default validator;
