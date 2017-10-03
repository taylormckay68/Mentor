import React, { Component } from 'react';
import './MobileMenu.css';

export default class Sidenav extends Component {
    render() {
        return (
            <div className={"mobile_menu_container " + (this.props.showMenu ? 'show': 'hidden')}>
                <div className="mobile_menu_header">
                    <button onClick={this.props.toggleMenu} className="close_button">&#10006;</button>
                </div>
                <ul>
                    <li className="home" onClick={() => this.props.toggleSubMenu()}>Home</li>
                        <div className={this.props.showSubMenu ? 'show_sub' : 'hide_sub'}>
                            <li className="home_sub">test 1</li>
                            <li className="home_sub">test 2</li>
                            <li className="home_sub">test 3</li>
                            <li className="home_sub">test 4</li>
                        </div>
                    <li className="home">Course</li>
                    <li className="home">About</li>
                </ul>
            </div>
        )

    }
}