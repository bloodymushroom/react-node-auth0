// @flow
import React, { Component } from 'react'

export default class Hello extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	incrementCount() {
		this.setState({
			count: ++this.state.count
		})
	}

	componentDidMount() {
		setInterval(this.incrementCount.bind(this), 500)
	}

	render() {
		return (
			<div>
				Hello! <br /> { this.state.count }
			</div>
		)
	}
}
