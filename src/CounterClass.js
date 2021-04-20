import { Component } from 'react'
import { BtnColorContext } from './App'

export default class CounterClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.initialCount,
    }
  }
  render() {
    return (
      <BtnColorContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
          </div>
        )}
      </BtnColorContext.Consumer>
    )
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount }
    })
  }
}
