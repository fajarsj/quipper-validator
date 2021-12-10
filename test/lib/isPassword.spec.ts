import validator from "./../../src";

describe("isEmpty", () => {
  it("Should validate password", () => {
    expect(validator.isPassword("loremIpSum123")).toBe(true);
  });

  it("Should validate password with detail message", () => {
    expect(
      validator.isPassword("lorem", {
        displayError: true,
      })
    ).toEqual({
      detail: {
        isIncludeNumber: false,
        isIncludeString: true,
        isMinimunCharacter: false,
      },
      message:
        "Password must be at least 6 characters and combination of numbers.",
    });
  });
});
