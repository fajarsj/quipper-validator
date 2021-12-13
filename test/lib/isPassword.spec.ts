import validator from "./../../src";

describe("isEmpty", () => {
  it("Should validate password", () => {
    expect(validator.isPassword("loremIpSum123")).toEqual(true);
  });

  it("Should validate password with detail response", () => {
    expect(
      validator.isPassword("lorem", {
        includeResponse: true,
      })
    ).toEqual({
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
});
