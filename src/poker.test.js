let poker =require('./poker.js')

describe('Pocker hand', () => {
  describe('High card', () => {
    it('High card white win', () => {
      expect(poker.check('3S,2S,4S,5S,6D', '3S,2S,4S,5S,7D')).toBe('White wins')
    })

    it('High card black win', () => {
      expect(poker.check('3S,2S,4S,5S,7D', '3S,2S,4S,5S,6D')).toBe('Black wins')
    })

    it('High card black win', () => {
      expect(poker.check('3S,2S,4S,6S,7D', '3S,2S,4S,5S,7D')).toBe('White wins')
    })

    it('High card black win by comparing number only', () => {
      expect(poker.check('3S,2S,4S,5S,7C', '3S,2S,4S,5S,6D')).toBe('Black wins')
    })

    it('High card black win by sorting', () => {
      expect(poker.check('3S,2S,7C,4S,5S', '3S,2S,4S,5S,6D')).toBe('Black wins')
    })
  })

  describe('Tie', ()=>{
    it('both players have four of a kind', () => {
      expect(poker.check('2S,2H,2C,2D,3D', '2S,2H,2C,2D,3D')).toBe('Tie')
    })
  })

  it('one player has a pair and the other does not', () => {
  })
})
