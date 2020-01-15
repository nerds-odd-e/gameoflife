let poker =require('./poker.js')

describe('Pocker hand', () => {
  it('both playes have four of a kind', () => {
    expect(poker.check('S2,H2,C2,D2,D3', 'S2,H2,C2,D2,D3')).toBe('Tie')
  })

  it('High card blank win', () => {
    expect(poker.check('3S,2S,4S,5S,6D', '3S,2S,4S,5S,7D')).toBe('Tie')
  })

})
