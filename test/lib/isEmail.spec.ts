import validator from "./../../src";

describe("isEmail", () => {
  it("Should validate email", () => {
    expect(validator.isEmail("loremipsum@gmail.com")).toEqual(true);
  });
});
