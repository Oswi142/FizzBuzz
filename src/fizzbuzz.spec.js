import fizz from "./fizz.js";
import buzz from "./buzz.js";
import {fizzbuzz, fizzbuzzLista} from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("Debe retornar fizz si es multiplo de 3", () => {
      expect(fizz(3)).toEqual("Fizz");
    });
});
  
describe("FizzBuzz", () => {
it("Debe retornar buzz si es multiplo de 5", () => {
    expect(buzz(5)).toEqual("Buzz");
    });
});

describe("FizzBuzz", () => {
  it("Debe retornar fizzbuzz si es multiplo de 3 y 5", () => {
      expect(fizzbuzz(15)).toEqual("Fizzbuzz");
      });
  });

describe("FizzBuzz", () => {
  it("Debe retornar la combinación de Fizz y Buzz",()=>{
    expect(fizzbuzzLista(10)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz");
  })
  });