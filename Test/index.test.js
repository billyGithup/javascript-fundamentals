const { name, height, message, isEven } = require("./index");

describe("variables", () => {
  it("should return Joe", () => {
    expect(name).toEqual("Joe");
  });

  it("should be less than 80", () => {
    expect(height).toBeLessThan(80);
  });

  it("should include the name and height", () => {
    expect(message).toContain(name);
    expect(message).toContain(height.toString());
  });
});

describe("isEven", () => {
  test("It should return true if the number is even", () => {
    expect(isEven(2)).toBe(true);
  });

  test("It should return false if the number is odd", () => {
    expect(isEven(3)).toBe(false);
  });

  test("It should throw an error if number is negative", () => {
    expect(() => isEven(-1)).toThrow();
  });

  test("It should throw an error if number is not a number", () => {
    expect(() => isEven("1")).toThrow();
  });
});

// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/next/expect#tobenan
