const isEmail = (str: string): boolean =>
  !!str.match(
    /^(?!.*?[.]{2})[a-z0-9]+[a-z0-9._%\-+]*[a-z0-9]@[a-z0-9]+[a-z0-9.-]*[a-z0-9]*\.[a-z]{2,24}$/
  );

export default isEmail;
