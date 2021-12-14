const isIncludeNumber = (str: string): boolean =>
  !!(str.match(/\d/) || str.match(/\d+/g));

export default isIncludeNumber;
