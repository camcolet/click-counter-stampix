import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'


class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    }
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter +1
    })
  }

   decrementCounter = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }

  render() {
    return (
        <div>
          <div className="count">
          {this.state.counter}
          </div>
          <div className="operations">
            <div onClick = {this.decrementCounter} className ="operation">
              <FontAwesomeIcon icon={faMinusCircle} />
            </div>
            <div onClick = {this.incrementCounter} className ="operation">
              <FontAwesomeIcon icon={faPlusCircle} />
            </div>
          </div>
        </div>
      )
  }
}

export default Button;
