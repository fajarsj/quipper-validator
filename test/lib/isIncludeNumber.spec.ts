import validator from "../../src";

describe("isIncludeNumber", () => {
  it("Should validate isIncludeNumber", () => {
    expect(validator.isIncludeNumber("Lorem123")).toBe(true);
  });
});
