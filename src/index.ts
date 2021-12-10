import isEmail from "./lib/isEmail";
import isEmpty, { Options } from "./lib/isEmpty";
import isUsername from "./lib/isUsername";

interface Validator {
  isEmail: (str: string) => boolean;
  isEmpty: (str: string, options?: Options) => boolean;
  isUsername: (str: string) => boolean;
}

const validator: Validator = {
  isEmail,
  isEmpty,
  isUsername,
};

export default validator;
