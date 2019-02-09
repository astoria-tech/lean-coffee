import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import cards from './cards';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  cards
})

export default rootReducer;
