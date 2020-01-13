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
  })
})