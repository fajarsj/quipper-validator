import validator from "./../../src";

describe("isPassword", () => {
  it("Should validate password", () => {
    expect(validator.isPassword("loremIpSum123")).toEqual(true);
  });
});
