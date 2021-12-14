import isLength from "./isLength";
import isIncludeNumber from "./isIncludeNumber";
import isIncludeString from "./isIncludeString";

export interface Response {
  isValid: boolean;
  message: string;
  detail: {
    isIncludeNumber: boolean;
    isIncludeString: boolean;
    isMinChar: boolean;
  };
}

const isPasswordValidation = (str: string): Response => {
  const res: Response = {
    isValid: false,
    message: "",
    detail: {
      isIncludeNumber: false,
      isIncludeString: false,
      isMinChar: false,
    },
  };

  const messages = [];

  if (
    isLength(str, {
      min: 6,
    })
  ) {
    res.detail.isMinChar = true;
  } else {
    messages.push("6 characters");
  }

  if (isIncludeNumber(str)) {
    res.detail.isIncludeNumber = true;
  } else {
    messages.push("combination of numbers");
  }

  if (isIncludeString(str)) {
    res.detail.isIncludeString = true;
  } else {
    messages.push("combination of letters");
  }

  if (messages.length > 1) {
    res.message = `Password must be at least ${messages
      .slice(0, messages.length - 1)
      .join(", ")} and ${messages[messages.length - 1]}.`;
  } else if (messages.length === 1) {
    res.message = `Password must be at least ${messages[0]}.`;
  } else {
    res.message = `Password is valid.`;
    res.isValid = true;
  }

  return res;
};

export default isPasswordValidation;
