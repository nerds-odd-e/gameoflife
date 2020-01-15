const card = (symbol) => {
    return {suit: symbol[1], value: symbol[0]}
}

let getPlayer1Hands = function (c1) {
    return c1.split(',').sort();
};
module.exports = {
    singleCardWins: function (player1_hands, player2_hands, index = 3) {
        if (player1_hands[index] > player2_hands[index]) {
            return "Black wins"
        }
        return "White wins"
    }, check(c1, c2) {
        const player1_hands = getPlayer1Hands(c1)
        const player2_hands = c2.split(',').sort()
        if (c1 === c2)
            return 'Tie';
        if (player1_hands[4] === player2_hands[4]) {
            return this.singleCardWins(player1_hands, player2_hands, 3);
        }
        if(player1_hands[0][0] === player1_hands[1][0]){
            return "Black wins"
        }
        return this.singleCardWins(player1_hands, player2_hands, 4)
    },
    card(symbol){
        return {suit: symbol[1], value: symbol[0]}
    }
}
