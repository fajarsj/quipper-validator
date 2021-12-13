import isEmail from "./lib/isEmail";
import isEmpty, { Options as OptionsIsEmpty } from "./lib/isEmpty";
import isUsername from "./lib/isUsername";
import isPassword from "./lib/isPassword";
import isPasswordValidation, {
  Response as ResponseIsPasswordValidation,
} from "./lib/isPasswordValidation";

interface Validator {
  isEmail: (str: string) => boolean;
  isEmpty: (str: string, options?: OptionsIsEmpty) => boolean;
  isUsername: (str: string) => boolean;
  isPassword: (str: string) => boolean;
  isPasswordValidation: (str: string) => ResponseIsPasswordValidation;
}

const validator: Validator = {
  isEmail,
  isEmpty,
  isUsername,
  isPassword,
  isPasswordValidation,
};

export default validator;
