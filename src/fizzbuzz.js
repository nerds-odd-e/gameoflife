module.exports = {
  say(number) {
    let match = [{factor: 15, word: 'FizzBuzz'}, {factor: 5, word: 'Buzz'}, {factor: 3, word: 'Fizz'}].find(rule => number % rule.factor === 0)
    if (match){
      return match.word
    }
    //if (number % 5 === 0) {return 'Buzz'}
    //if (number % 3 === 0) {return 'Fizz'}
    return number.toString()
  }
}