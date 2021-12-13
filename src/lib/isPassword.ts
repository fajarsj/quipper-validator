const isPassword = (str: string): boolean =>
  !!(str.match(/\d/) && str.match(/[a-zA-Z]/)) && str.length >= 6;

export default isPassword;
