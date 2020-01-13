const { fizzbuzz } = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("get 1 when input 1", () => {
    expect('1').toEqual(fizzbuzz(1)); 
  });

  it("get 2 when input 2", () => {
    expect('2').toEqual(fizzbuzz(2)); 
  });

  it("get fizz when input 3", () => {
    expect('fizz').toEqual(fizzbuzz(3)); 
  });
  it("get fizz when input 6", () => {
    expect('fizz').toEqual(fizzbuzz(6)); 
  });

});
