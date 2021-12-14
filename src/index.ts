import isEmail from "./lib/isEmail";
import isEmpty, { Options as OptionsIsEmpty } from "./lib/isEmpty";
import isUsername from "./lib/isUsername";
import isPassword from "./lib/isPassword";
import isPasswordValidation, {
  Response as ResponseIsPasswordValidation,
} from "./lib/isPasswordValidation";
import isIncludeNumber from "./lib/isIncludeNumber";
import isIncludeString from "./lib/isIncludeString";
import isLength, { Options as OptionsIsLength } from "./lib/isLength";

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

const validator: Validator = {
  isEmail,
  isEmpty,
  isUsername,
  isPassword,
  isPasswordValidation,
  isIncludeNumber,
  isIncludeString,
  isLength,
};

export default validator;
