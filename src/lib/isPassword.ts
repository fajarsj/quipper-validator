export interface Options {
  displayErrors: boolean;
}

export interface Error {
  message: string;
  detail: {
    isIncludeNumber: boolean;
    isIncludeString: boolean;
    isMinimunCharacter: boolean;
  };
}

const defaultOptions = {
  displayErrors: false,
};

const isPassword = (
  str: string,
  options: Options = defaultOptions
): boolean | Error => {
  options = Object.assign(defaultOptions, options);

  if (options.displayErrors) {
    const error = {
      message: "",
      detail: {
        isIncludeNumber: false,
        isIncludeString: false,
        isMinimunCharacter: false,
      },
    };

    const messages = [];

    if (str.length >= 6) {
      error.detail.isMinimunCharacter = true;
    } else {
      messages.push("6 characters");
    }

    if (str.match(/\d/) || str.match(/\d+/g)) {
      error.detail.isIncludeNumber = true;
    } else {
      messages.push("combination of numbers");
    }

    if (str.match(/[a-zA-Z]/) || str.match(/.*\\d.*/)) {
      error.detail.isIncludeString = true;
    } else {
      messages.push("combination of letters");
    }

    if (messages.length) {
      if (messages.length > 1) {
        error.message = `Password must be at least ${messages
          .slice(0, messages.length - 1)
          .join(", ")} and ${messages[messages.length - 1]}.`;
      } else {
        error.message = `Password must be at least ${messages[0]}.`;
      }

      return error;
    }

    return true;
  }

  return !!(str.match(/\d/) && str.match(/[a-zA-Z]/)) && str.length >= 6;
};

export default isPassword;
