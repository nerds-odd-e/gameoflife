module.exports = {
    check(c1, c2) {
        let player1_hands = c1.split(',')
        let player2_hands = c2.split(',')
        if (c1 === c2)
            return 'Tie';
        return "White wins"
    }
}
