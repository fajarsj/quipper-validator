export interface Options {
  ignoreWhitespace: boolean;
}

const defaultOptions: Options = {
  ignoreWhitespace: false,
};

const isEmpty = (str: string, options: Options = defaultOptions) => {
  options = Object.assign(defaultOptions, options);

  return (options.ignoreWhitespace ? str.trim().length : str.length) === 0;
};

export default isEmpty;
