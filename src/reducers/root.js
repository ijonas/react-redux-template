import { createStore } from 'redux'
import * as types from '../types'

export const initialState = {
  message: 'Hello React+Redux Coder!',
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MESSAGE:
      var state = Object.assign({}, state, {message: action.payload.message});
      return state;
    default:
      return state
  }
}
