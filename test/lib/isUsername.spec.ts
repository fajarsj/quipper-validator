import validator from "./../../src";

describe("isUsername", () => {
  it("Should validate username", () => {
    expect(validator.isUsername("Conan O'brien")).toBe(true);
  });
});
