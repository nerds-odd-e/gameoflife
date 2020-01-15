module.exports = {
    check(c1, c2) {
        const player1_hands = c1.split(',')
        const player2_hands = c2.split(',')
        if (c1 === c2)
            return 'Tie';
        if(player1_hands[4] > player2_hands[4]){
            return "Black wins"
        }
        if(player1_hands[0] === player1_hands[1]){
          return "Black wins"
        }
        return "White wins"
    }
}
