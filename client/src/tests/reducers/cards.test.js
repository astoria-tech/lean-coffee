import cardsReducer from '../../reducers/cards'
import * as types from '../../constants'

describe('cards reducer', () => {
    it('should return the initial state', () => {
        expect(cardsReducer(undefined, {})).toEqual({
            cards: [],
        })
    })

    
})