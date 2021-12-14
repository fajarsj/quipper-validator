import isLength from "./isLength";

const isUsername = (str: string): boolean => {
  const trimStr = str.trim();

  return (
    !!trimStr.match(
      /^[a-zA-Z \u00c0-\u00ff\'\-々ぁ-ゔゞァ-・ヽヾ゛゜ー\u4e00-\u9faf]+$/
    ) &&
    isLength(trimStr, {
      min: 4,
      max: 20,
    })
  );
};

export default isUsername;
