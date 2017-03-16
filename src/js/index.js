// @flow
import React from 'react'
import { render } from 'react-dom'

// import Root separately so hot reloading will work
import Root from './Root.js'


render(
	<Root />,
	window.document.getElementById('app-container')
)
