import React, { Component } from 'react';
import './App.css';
import Sidenav from './Sidenav';
const svg = require('./assets/hamburger.svg');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showSubMenu: false
    }
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  toggleSubMenu() {
    this.setState({
      showSubMenu: !this.state.showSubMenu
    })
    console.log(this.state.showSubMenu)
  }
  render() {
    return (
      <div className="App">
        <button className="logo" onClick={() => this.toggleMenu()}><img src={svg} alt="j" /></button>
        <Sidenav showMenu={this.state.showMenu} 
                showSubMenu={this.state.showSubMenu} 
                toggleSubMenu={this.toggleSubMenu}
                toggleMenu={this.toggleMenu}/>
      </div>
    );
  }
}

export default App;
