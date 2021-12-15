import validator from "./../../src";

describe("isUsername", () => {
  it("Should validate username", () => {
    expect(validator.isUsername("kotobuki.minako")).toBe(true);
  });
});
