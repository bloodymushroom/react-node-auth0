// @flow
import React, { Component } from 'react'

// Routes are not yet implemented but can be used
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

// components
import Main from './views/Main'


class Root extends Component {
   render() {
  	return (
			<Router>
        <Main />
      </Router>
    ) 
  }
}

export default Root;