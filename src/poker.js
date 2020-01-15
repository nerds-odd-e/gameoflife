module.exports = {
    check(c1, c2) {
        let player1 = c1.split(',')
        let player2 = c2.split(',')
        if (c1 === c2)
            return 'Tie';
        return "White wins"
    }
}
