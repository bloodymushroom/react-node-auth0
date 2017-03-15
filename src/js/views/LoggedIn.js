import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

//logout
import { logout } from '../utils/AuthService'

class LoggedIn extends Component {
  render() {
    console.log('rendered loggedin')
    return (
      <div>
        This is the logged in view! can you see?
        <button onClick={ () => logout() }>Logout</button> 
      </div>
    )
  }
}

export default LoggedIn