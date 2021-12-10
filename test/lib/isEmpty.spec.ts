import validator from "./../../src";

describe("isEmpty", () => {
  it("Should validate empty string", () => {
    expect(validator.isEmpty("")).toBe(true);
  });

  it("Should validate empty string with whitespace", () => {
    expect(
      validator.isEmpty("    ", {
        ignoreWhitespace: true,
      })
    ).toBe(true);
  });
});
