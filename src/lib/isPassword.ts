import isLength from "./isLength";
import isIncludeNumber from "./isIncludeNumber";
import isIncludeString from "./isIncludeString";

const isPassword = (str: string): boolean =>
  !!(
    isIncludeNumber(str) &&
    isIncludeString(str) &&
    isLength(str, {
      min: 6,
    })
  );

export default isPassword;
