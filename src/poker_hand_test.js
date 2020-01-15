const poker_hand = require('./poker_hand.js');

describe('poker_hand', () => {
    it('says get 52 cards', () => {
      expect(poker_hand.cards.length.toBe('52'))
    })
})