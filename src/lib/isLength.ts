export interface Options {
  min?: number;
  max?: number;
  ignoreWhitespace?: boolean;
}

const defaultOptions: Options = {
  min: undefined,
  max: undefined,
  ignoreWhitespace: false,
};

const isLength = (str: string, options?: Options): boolean => {
  options = Object.assign(defaultOptions, options);
  let min: Number | undefined;
  let max: Number | undefined;

  if (options) {
    min = options.min || 0;
    max = options.max;
  }

  if (options && options.ignoreWhitespace) {
    const trimStr = str.trim();
    return (
      trimStr.length >= min &&
      (typeof max === "undefined" || trimStr.length <= max)
    );
  }

  return str.length >= min && (typeof max === "undefined" || str.length <= max);
};

export default isLength;
