import fizz from "./fizz.js";
import buzz from "./buzz.js";

describe("FizzBuzz", () => {
    it("Debe retornar fizz si es 3", () => {
      expect(fizz(3)).toEqual("fizz");
    });
});
  
describe("FizzBuzz", () => {
it("Debe retornar buzz si es 5", () => {
    expect(buzz(5)).toEqual("buzz");
    });
});