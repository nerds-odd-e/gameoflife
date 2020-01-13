module.exports = {
  say(number) {
    let match = [{factor: 15, word: 'FizzBuzz'}].find(rule => number % rule.factor === 0)
    if (match){
      return match.word
    }
    if (number % 5 === 0) {return 'Buzz'}
    if (number % 3 === 0) {return 'Fizz'}
    return number.toString()
  }
}