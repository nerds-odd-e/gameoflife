module.exports = {
    check(c1, c2) {
        const player1_hands = c1.split(',').sort()
        const player2_hands = c2.split(',').sort()
        if (c1 === c2)
            return 'Tie';
        if(player1_hands[4] > player2_hands[4]){
            return "Black wins"
        }
        return "White wins"
    }
}
