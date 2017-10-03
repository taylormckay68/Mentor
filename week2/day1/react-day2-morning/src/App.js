import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      favColor: 'maroon'
    }
    this.changeColor = this.changeColor.bind(this);
  }

changeColor() {
  let nextColor = '';
  if(this.state.favColor === "maroon") {
    nextColor = 'green'
  } 
  else if(this.state.favColor === "green") {
    nextColor = '#34de79'
  } 
  else if(this.state.favColor === "#34de79") {
    nextColor = 'brown'
  }
  else if(this.state.favColor === "brown") {
    nextColor = 'gray'
  }
  else if(this.state.favColor === "gray") {
    nextColor = 'maroon'
  }
  this.setState({
    favColor: nextColor
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <AppJr 
              bedTime={7} 
              dinner='pizza'
              color={this.state.favColor}
              newColor={this.changeColor}
              />
        </p>
      </div>
    );
  }
}

export default App;

class AppJr extends Component {
  
  render() {
    let colorStyle = {
      color: this.props.color
    }

    return (
      <div>
        <h4>I am junior</h4>
        <p>I got to bed at {this.props.bedTime}</p>
        <p>I had {this.props.dinner} for dinner</p>
        <p style={colorStyle}>My favorite color is {this.props.color}</p>
        <br/>
        <button onClick={() => this.props.newColor()}>Next Color</button>
      </div>
    )
  }
}
