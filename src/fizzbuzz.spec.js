import fizz from "./fizz.js";
import buzz from "./buzz.js";
import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("Debe retornar fizz si es multiplo de 3", () => {
      expect(fizz(3)).toEqual("fizz");
    });
});
  
describe("FizzBuzz", () => {
it("Debe retornar buzz si es multiplo de 5", () => {
    expect(buzz(5)).toEqual("buzz");
    });
});

describe("FizzBuzz", () => {
  it("Debe retornar fizzbuzz si es multiplo de 3 y 5", () => {
      expect(fizzbuzz(15)).toEqual("fizzbuzz");
      });
  });

describe("FizzBuzz", () => {
  it("Debe retornar fizzbuzz si es multiplo de 3 y 5", () => {
      expect(fizzbuzz(30)).toEqual("fizzbuzz");
      });
  });