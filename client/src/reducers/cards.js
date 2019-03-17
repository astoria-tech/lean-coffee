import {
    RECEIVE_CARDS,
    DELETE_CARD
} from '../constants';

import { createReducer } from './createReducer';

const initialState = {
    cards: [],
};

export default createReducer(initialState, {
    [RECEIVE_CARDS]: (state, payload) =>
        Object.assign({}, state, {
            cards: payload
        }),
    [DELETE_CARD]: (state, payload) =>
        Object.assign({}, state, {
            cards: state.cards.filter(card => card.id !== payload)
        }),
});
