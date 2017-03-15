// @flow
import React, { Component } from 'react'
// import { Router, Route, IndexRoute } from 'react-router'
// import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


// components
import Public from './views/Public'
import LoggedIn from './views/LoggedIn'

// mobx
import { observer } from 'mobx-react'
import store from './mobx/Store.js'

// auth
import { isLoggedIn } from './utils/AuthService'

// var browserHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    console.log('login function', isLoggedIn())
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to='/loggedIn'>Log in </Link>
        {this.props.children}
      </div>
    )
  }
}

@observer
class Root extends Component {
  componentWillMount() {
    store.loggedIn = isLoggedIn();
    console.log('login function', isLoggedIn(), store.loggedIn)    
  }

   render() {
  	return (
  			<Router>
          <div>
            {
              store.loggedIn ? <div><Route path='/' component={LoggedIn}/></div>
              : <div><Route path='/' component={Public} /></div>
            }
            <span>gellddo</span>
          </div>
        </Router>
    ) 
  }
}

export default Root;