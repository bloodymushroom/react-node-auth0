// @flow
import React from 'react'
import { render } from 'react-dom'

// root is the router
import Root from './Root.js'

render(
	<Root />,
	window.document.getElementById('app-container')
)
