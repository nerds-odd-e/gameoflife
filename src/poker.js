const card = (symbol) => {
    return {suit: symbol[1], value: symbol[0]}
}

const getHands = function (c1) {
    return c1.split(',').sort();
};

const singleCardWins = (player1_hands, player2_hands, index = 3) => {
    if (player1_hands[index] > player2_hands[index]) {
        return "Black wins"
    }
    return "White wins"
}

const isFlush = function(player_hand) {
    let suit = player_hand[0][0]

    for (i = 1; player_hand.length; i++) {

        if (player_hand[i][0] !== suit) {
            return false;
        }
      }
    return true;


}

module.exports = {
    check: function(black, white) {
        const black_hands = getHands(black)
        const white_hands = getHands(white)
        if (black === white)
            return 'Tie';
        if(black_hands[0][0] === black_hands[1][0]){
            return "Black wins"
        }
        if (black_hands[4] === white_hands[4]) {
            return singleCardWins(black_hands, white_hands, 3);
        }
        return singleCardWins(black_hands, white_hands, 4)
    },
    card
}
