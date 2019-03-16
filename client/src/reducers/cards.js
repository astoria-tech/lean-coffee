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

// export default function (state = initialState, action){
//     switch(action.type){
//         case RECEIVE_CARDS:
//             return {
//                 ...state,
//                 cards: action.payload
//             }
//         case DELETE_CARD:
//             // console.log(state.cards)
//             return {
//                 ...state,
//                 items: state.cards.filter(card => card.id !== action.payload)
//             }
//         default: 
//             return state
//     }
// }
