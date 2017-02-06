// @flow
import React, { Component } from 'react'

type Props = {}
type State = {
	count: number
}

export default class Hello extends Component {
	props: Props
	state: State

	constructor(props: Props) {
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

	test() {
		return 0
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
