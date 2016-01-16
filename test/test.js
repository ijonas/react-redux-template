import {rootReducer, initialState} from '../src/reducers/root'
import {updateMessage} from '../src/actions/root'
import * as types from '../src/types'

let initialStateCopy = Object.assign({}, initialState)

describe('updateMessage', ()=> {
  it('should return an object with a message payload', ()=> {
    expect(updateMessage('Make a lightsabre')).to.eql({
      type: types.UPDATE_MESSAGE,
      payload: {
        message: 'Make a lightsabre'
      }
    })
  })
})

describe('rootReducer', ()=> {
  it('should return the initial state when action==undefined', ()=>{
    expect(rootReducer(undefined, {})).to.eql(initialStateCopy)
  })
  it('update the current message', ()=>{
    expect(
      rootReducer(initialStateCopy, {type: types.UPDATE_MESSAGE, payload: {message: 'An updated message'}})
    ).to.eql({
      message: 'An updated message'
    })
  })
})
