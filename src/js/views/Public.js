// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'

// mobx
import { observer } from 'mobx-react'
import store from '../mobx/Store.js'

@observer
class Public extends Component {
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

  incrementNumber() {
    store.incrementNumber();
  }

  componentDidMount() {
    setInterval(this.incrementCount.bind(this), 500)
  }

  render() {
    return (
      <div>
        This this count is increasing, react is set up! <br /> { this.state.count }
        <br/>
        <button onClick={ this.incrementNumber }>Click to increase below</button>
        <br />If this increases on click, mobx is set up: { store.number } 
      </div>
    )
  }
}

export default Public;
