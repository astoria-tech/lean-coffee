import {
    RECEIVE_CARDS,
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
});
