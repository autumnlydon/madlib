const madlib = require("./madlib");

describe("madlib tests", () => {
  test("madlib returns a multiline story", () => {
    let expected = "There was a Basket Weaver named Gilbert.\n";
    expected += "They love to breakdance.\n";
    expected +=
      "They went to the olympics to breakdance, lost, and never did it again.";

    expect(madlib("Basket Weaver", "Gilbert", "breakdance", false)).toBe(
      expected
    );

    // expect(functionCall).toBe(expectedResult)
  });
});
