// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'

// mobx
import { observer } from 'mobx-react'
import store from '../mobx/Store.js'

// auth
import { login, logout, isLoggedIn } from '../utils/AuthService'

@observer
class Public extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }

    console.log('rendered')
  }

  incrementCount() {
    this.setState({
      count: ++this.state.count
    })
  }

  incrementNumber() {
    store.incrementNumber();
  }

  componentDidMount() {
    setInterval(this.incrementCount.bind(this), 500)
  }

  render() {
    var styles = {
      column: {
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', margin: '10px'
      }
    }
    return (
      <div style={{display: 'flex'}}>
        <div style={styles.column}>
          <span>This this count is increasing, react is set up!</span>
          <span>{ this.state.count }</span>
        </div>
        <div style={styles.column}>
          <button onClick={ this.incrementNumber }>Click to increase below</button>
          <span>If this increases on click, mobx is set up: { store.number }</span>
        </div>

        {
          isLoggedIn() ? <button onClick={() => logout()} >Log out</button> 
          : <button onClick={() => login()} >Log in</button>
        }

        {this.props.children}
      </div>
    )
  }
}

export default Public;
