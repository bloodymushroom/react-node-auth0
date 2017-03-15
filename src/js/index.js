// @flow
import React from 'react'
import { render } from 'react-dom'

// // root is the router
// import { Router, Route, IndexRoute } from 'react-router'
// import { createBrowserHistory } from 'history'
// import Public from './views/Public'
// import LoggedIn from './views/LoggedIn'


import Root from './Root.js'


render(
	<Root />,
	window.document.getElementById('app-container')
)
