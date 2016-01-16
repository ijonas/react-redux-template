import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {updateMessage} from '../actions/root'

class App extends Component {
  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.dispatch(updateMessage(text))
    node.value = ''
  }
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>Click Me!</button>
      </div>
    )
  }
}

function select(state) {
  return {
    message: state.message
  }
}
export default connect(select)(App)

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}
