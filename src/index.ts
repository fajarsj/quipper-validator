import isEmail from "./lib/isEmail";
import isEmpty, { Options as OptionsIsEmpty } from "./lib/isEmpty";
import isUsername from "./lib/isUsername";
import isPassword, {
  Options as OptionsIsPassword,
  Error as ErrorIsPassword,
} from "./lib/isPassword";

interface Validator {
  isEmail: (str: string) => boolean;
  isEmpty: (str: string, options?: OptionsIsEmpty) => boolean;
  isUsername: (str: string) => boolean;
  isPassword: (
    str: string,
    options?: OptionsIsPassword
  ) => boolean | ErrorIsPassword;
}

const validator: Validator = {
  isEmail,
  isEmpty,
  isUsername,
  isPassword,
};

export default validator;
