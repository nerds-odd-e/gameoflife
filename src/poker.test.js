let poker =require('./poker.js')

describe('Pocker hand', () => {
  it('both players have four of a kind', () => {
    expect(poker.check('2S,2H,2C,2D,3D', '2S,2H,2C,2D,3D')).toBe('Tie')
  })

  it('High card white win', () => {
    expect(poker.check('3S,2S,4S,5S,6D', '3S,2S,4S,5S,7D')).toBe('White wins')
  })

})
