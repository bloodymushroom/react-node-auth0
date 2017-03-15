// @flow
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

// components
import Public from './views/Public'
import LoggedIn from './views/LoggedIn'

// mobx
import { observer } from 'mobx-react'
import store from './mobx/Store.js'

const Root = () => {
	<div>
		<Router history={ browserHistory } >
			<Route path='/' component={Public}/>
			<Route path='/loggedIn' component={LoggedIn}/>
		</Router>
	</div>
}

export default Root;