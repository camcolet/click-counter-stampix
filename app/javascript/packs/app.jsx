import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import photo from '../../assets/images/photo.jpg';

console.log(photo)

class App extends Component {
  render() {
    return (
        <div className = "container">
          <div className="image">
            <img src={photo} alt="Photo" />
          </div>
          <div>
            <div className="text">
              How many times would you like to print this photo ?
            </div>
            <div>
              <Button/>
            </div>
          </div>
        </div>
      )
  }
}




const root = document.getElementById('root')
if (root) {
  ReactDOM.render(<App />, root);
}
