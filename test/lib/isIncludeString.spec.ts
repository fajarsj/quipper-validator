import validator from "../../src";

describe("isIncludeString", () => {
  it("Should validate isIncludeString", () => {
    expect(validator.isIncludeString("123Lorem456")).toBe(true);
  });
});
