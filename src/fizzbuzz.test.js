<<<<<<< HEAD
const { fizzbuzz } = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("get 1 when input 1", () => {
    expect('1').toEqual(fizzbuzz(1)); 
  });

  it("get 2 when input 2", () => {
    expect('2').toEqual(fizzbuzz(2)); 
  });

  it("get fizz when input 3", () => {
    shouldBeFizz(3); 
  });

  it("get fizz when input 6", () => {
    shouldBeFizz(6);
  }); 

  it("get buzz when input 5", () => { 
    expect('buzz').toEqual(fizzbuzz(5)); 
  }); 
});

function shouldBeFizz(input) {
  expect('fizz').toEqual(fizzbuzz(input));
}

=======
let fizzbuzz = require('./fizzbuzz.js')

describe('FizzBuzz', () => {
  it('says number for normal number', () => {
    expect(fizzbuzz.say(1)).toBe('1')
    expect(fizzbuzz.say(2)).toBe('2')
  })

  it('says Fizz for 3x', () => {
    expect(fizzbuzz.say(3)).toBe('Fizz')
    expect(fizzbuzz.say(6)).toBe('Fizz')
  })

  it('says Buzz for 5x', () => {
    expect(fizzbuzz.say(5)).toBe('Buzz')
    expect(fizzbuzz.say(10)).toBe('Buzz')
  })
  it('says FizzBuzz from 15x', () => {
    expect(fizzbuzz.say(15)).toBe('FizzBuzz')
    expect(fizzbuzz.say(30)).toBe('FizzBuzz')
  })
})
>>>>>>> master
