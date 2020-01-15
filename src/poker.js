module.exports = {
    check(c1, c2) {
        const player1_hands = c1.split(',').sort()
        const player2_hands = c2.split(',').sort()
        if (c1 === c2)
            return 'Tie';
        if (player1_hands[4] === player2_hands[4]) {
            if(player1_hands[3] > player2_hands[3]){
                return "Black wins"
            }
            return "White wins"
        }
        if(player1_hands[4] > player2_hands[4]){
            return "Black wins"
        }
        if(player1_hands[0][0] === player1_hands[1][0]){
            return "Black wins"
        }
        return "White wins"
    },
    card(symbol){s
        return {suit: symbol[1], value: symbol[0]}
    }
}
