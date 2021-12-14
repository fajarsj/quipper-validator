import validator from "../../src";

describe("isLength", () => {
  it("Should validate isIncludeString", () => {
    expect(
      validator.isLength("Lorem", {
        min: 4,
        max: 5,
      })
    ).toBe(true);
  });
});
