let fizzbuzz = require('./fizzbuzz.js')

describe('FizzBuzz', () => {
  it('says number for normal number', () => {
    expect(fizzbuzz.say(1)).toBe('1')
    expect(fizzbuzz.say(2)).toBe('2')
  })
})