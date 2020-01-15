let poker = require('./poker.js')

describe('Pocker hand', () => {
    describe('High card', () => {
        it('High card white win', () => {
            expect(poker.check('3S,2S,4S,5S,7D', '3S,2S,4S,5S,8D')).toBe('White wins')
        })

        it('High card with Ace black win', () => {
            // expect(poker.check('3S,2S,4S,5S,AD', '3S,2S,4S,5S,7D')).toBe('Black wins')
        })

        it('High card black win', () => {
            expect(poker.check('3S,2S,4S,5S,7D', '3S,2S,4S,5S,6D')).toBe('Black wins')
        })

        it('Black second highest win', () => {
            expect(poker.check('3S,2S,4S,6S,7D', '3S,2S,4S,5S,7D')).toBe('Black wins')
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

    describe('flush', () => {
        it('flush wins normal', () => {

            //expect(poker.check('2C,3C,6C,AC,9C','2C,8C,6D,AC,9C')).toBe('Black wins')
        })
    })

    describe('creat a card', () => {
        it('should create a card', () => {
            let card = poker.card('2S')
            expect(card.suit).toBe('S')
            expect(card.value).toBe('2')
        })
    })

    describe('pair', () => {
        it('black has a pair and white has a high card', () => {
            expect(poker.check('2S,2H,3C,5D,7D', '3S,5H,7C,9D,8D')).toBe('Black wins')
        })
    })
})
