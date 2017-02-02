// @flow
import React from 'react'
import { render } from 'react-dom'

import Hello from './hello'

render(
	<Hello />,
	window.document.getElementById('app-container')
)
