import validator from "./../../src";

describe("isPasswordValidation", () => {
  it("Should validate password and return a a detail response", () => {
    expect(validator.isPasswordValidation("lorem")).toEqual({
      isValid: false,
      detail: {
        isIncludeNumber: false,
        isIncludeString: true,
        isMinChar: false,
      },
      message:
        "Password must be at least 6 characters and combination of numbers.",
    });
  });

  it("Should validate password and return a a detail response, but all should be valid", () => {
    expect(validator.isPasswordValidation("loremIpSum123")).toEqual({
      isValid: true,
      detail: {
        isIncludeNumber: true,
        isIncludeString: true,
        isMinChar: true,
      },
      message: "Password is valid.",
    });
  });
});
