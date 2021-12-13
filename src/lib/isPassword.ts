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

const defaultOptions = {
  includeResponse: false,
};

const isPassword = (
  str: string,
  options: Options = defaultOptions
): boolean | Response => {
  options = Object.assign(defaultOptions, options);

  if (options.includeResponse) {
    const res = {
      isValid: false,
      message: "",
      detail: {
        isIncludeNumber: false,
        isIncludeString: false,
        isMinChar: false,
      },
    };

    const messages = [];

    if (str.length >= 6) {
      res.detail.isMinChar = true;
    } else {
      messages.push("6 characters");
    }

    if (str.match(/\d/) || str.match(/\d+/g)) {
      res.detail.isIncludeNumber = true;
    } else {
      messages.push("combination of numbers");
    }

    if (str.match(/[a-zA-Z]/) || str.match(/.*\\d.*/)) {
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
  }

  return !!(str.match(/\d/) && str.match(/[a-zA-Z]/)) && str.length >= 6;
};

export default isPassword;
