// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'

// mobx state management
import { observer } from 'mobx-react'
import store from '../mobx/Store.js'

// auth
import { login, logout, isLoggedIn } from '../utils/AuthService'

// css
import classNames from '../styles/styles.css'

@observer
class Main extends Component {
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

  componentWillMount() {
    store.getPublicData();
    store.getPrivateData();
  }

  componentDidMount() {
    setInterval(this.incrementCount.bind(this), 500)
  }

  render() {
    return (
      <div className={classNames.view}>
        <div className={classNames.box}>
          <h1>React Check</h1>
          <span>This this count is increasing, react is set up!</span>
          <span>{ this.state.count }</span>
        </div>
        <div className={classNames.box}>
          <h1>Mobx Check</h1>
          <span>If this increases on click, mobx is set up: </span>
          <span>{ store.number }</span>
          <button onClick={ this.incrementNumber }>Click to increase above</button>
        </div>
        <div className={classNames.box}>
          <h1>Client Auth Check</h1>
          {
            !isLoggedIn()? (
              <span>
                This is the public view. Login to see private view
              </span>
            )
            : (
              <span>
                This is the private view. check your console => applications 
                => local storage => your domain to see your tokens!
              </span>
            )
          }
        <button onClick={() => {
          isLoggedIn()? logout(): login();
        }}>
          {isLoggedIn()? 'Logout' : 'Login'}
        </button>

        {this.props.children}
        </div>
        <div className={classNames.box}>
          <h1>Server Auth Check</h1>
          <div>
            Fetch to public route ('/data')<br />
            Data: {store.publicData}
          </div>
          <div>
            Fetch to private route ('/api/data')<br />
            Data: {store.privateData}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
