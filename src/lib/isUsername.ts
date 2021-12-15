import isLength from "./isLength";

const isUsername = (str: string): boolean => {
  const trimStr = str.trim();

  return (
    !!trimStr.match(/^[a-z0-9\-_\.]+$/) &&
    isLength(trimStr, {
      min: 4,
      max: 20,
    })
  );
};

export default isUsername;
