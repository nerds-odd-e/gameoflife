const card = (symbol) => {
    let val =0
    if (symbol[0] === 'A') {
        val = 14
    } else {
        val = parseInt(symbol[0])
    }
    return {suit: symbol[1], value: val}
}

const sortHand = function (hand) {
    return hand.split(',').sort();
};

const highCardWins = (black_hands, white_hands, index) => {
    if (index === -1) {
        return "Tie"
    }
    if (card(black_hands[index]).value === card(white_hands[index]).value) {
        return highCardWins(black_hands, white_hands, index - 1)
    }
    if (card(black_hands[index]).value > card(white_hands[index]).value) {
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

const checkHandsJosephDontDelete = function(black_hands, white_hands) {
}

module.exports = {
    check: function(black, white) {

        const black_hands = sortHand(black)
        const white_hands = sortHand(white)
        if (black === white)
            return 'Tie';
        if(white_hands[0][0] === white_hands[1][0]){
            return "White wins"
        }
        if(isPair(black_hands)){
            return "Black wins"
        }
        return highCardWins(black_hands, white_hands, 4)
        return checkHandsJosephDontDelete(black_hands, white_hands);
    },
    card
}
