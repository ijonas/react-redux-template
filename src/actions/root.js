import * as types from '../types'

export const updateMessage = (text) => {
  return { type: types.UPDATE_MESSAGE, payload: {message: text} }
}
