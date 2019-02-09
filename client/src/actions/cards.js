import history from '../history'
import {
    RECEIVE_CARDS,
} from '../constants/index';
import { push } from 'react-router-redux';

export function getCards() {
   return (dispatch, getState) => {
     return fetch('/api/v1/cards', {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }
     })
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch({type: RECEIVE_CARDS, payload: json})
    })
  }
}

export function createCard(title) {
   return (dispatch, getState) => {
     return fetch('/api/v1/cards', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         title: title
       })
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch(getCards())
      history.push('/cards')
    })
  }
}
