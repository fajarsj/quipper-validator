const isUsername = (str: string): boolean =>
  !!str.match(
    /^[a-zA-Z \u00c0-\u00ff\'\-々ぁ-ゔゞァ-・ヽヾ゛゜ー\u4e00-\u9faf]+$/
  );

export default isUsername;
