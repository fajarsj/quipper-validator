import { Options as OptionsIsEmpty } from "./lib/isEmpty";
import { Options as OptionsIsPassword, Error as ErrorIsPassword } from "./lib/isPassword";
interface Validator {
    isEmail: (str: string) => boolean;
    isEmpty: (str: string, options?: OptionsIsEmpty) => boolean;
    isUsername: (str: string) => boolean;
    isPassword: (str: string, options?: OptionsIsPassword) => boolean | ErrorIsPassword;
}
declare const validator: Validator;
export default validator;
