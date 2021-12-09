import validator from "./../src";

describe("Validator", () => {
  it("Should execute validator function correctly", () => {
    expect(validator.isEmail("loremipsum@gmail.com")).toEqual(true);
  });
});
