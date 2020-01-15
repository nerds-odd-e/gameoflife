const card = (symbol) => {
    return {suit: symbol[1], value: symbol[0]}
}

const sortHand = function (hand) {
    return hand.split(',').sort();
};

const singleCardWins = (player1_hands, player2_hands, index = 3) => {
    if (index === 0) {
        return "Tie"
    }
    if (player1_hands[index] === player2_hands[index]) {
        return singleCardWins(player1_hands, player2_hands, index - 1)
    }
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

const checkHands = function(black, white) {
}

let black_hands = []
module.exports = {
    check: function(black, white) {
        const black_hands = sortHand(black)
        const white_hands = sortHand(white)
        if (black === white)
            return 'Tie';
        if(black_hands[0][0] === black_hands[1][0]){
            return "Black wins"
        }
        return singleCardWins(black_hands, white_hands, 4)
    },
    card
}
