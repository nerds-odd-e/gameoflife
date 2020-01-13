

const fizzbuzz = function (input) {
    if(input === 5) return 'buzz';
    
    if (input % 3 ===0) {
        return 'fizz';
    }
    return input.toString();
}

module.exports = {fizzbuzz};