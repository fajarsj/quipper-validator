const isIncludeString = (str: string): boolean =>
  !!(str.match(/[a-zA-Z]/) || str.match(/.*\\d.*/));

export default isIncludeString;
