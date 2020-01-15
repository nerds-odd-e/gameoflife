let poker =require('./poker.js')

describe('Pocker hand', () => {
  describe('High card', () => {
    it('High card white win', () => {
      expect(poker.check('3S,2S,4S,5S,6D', '3S,2S,4S,5S,7D')).toBe('White wins')
    })

    it('High card black win', () => {
      expect(poker.check('3S,2S,4S,5S,7D', '3S,2S,4S,5S,6D')).toBe('Black wins')
    })

    it('Black second highest win', () => {
      expect(poker.check('3S,2S,4S,6S,7D', '3S,2S,4S,5S,7D')).toBe('Black wins')
    })

    it('High card black win by comparing number only', () => {
      expect(poker.check('3S,2S,4S,5S,7C', '3S,2S,4S,5S,6D')).toBe('Black wins')
    })

    it('High card black win by sort', () => {
      expect(poker.check('3S,2S,7C,4S,5S', '3S,2S,4S,5S,6D')).toBe('Black wins')
    })
  })

  it('both players have four of a kind', () => {
    expect(poker.check('2S,2H,2C,2D,3D', '2S,2H,2C,2D,3D')).toBe('Tie')
  })

  describe('flush', ()=>{
    it('flush wins normal',()=>{

    })
  })

  it('one player has a pair and the other does not', () => {
//    expect(poker.check('2S,2H,3C,5D,7D', '3S,5H,7C,9D,QD')).toBe('Black wins')
  })
})
