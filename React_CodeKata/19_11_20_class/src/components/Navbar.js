import React, { Component } from 'react'
import NavItems from './NavItems';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="navbar">
                    <h1 className="nav__logo"> React App </h1>
                    <ul>
                        <li> <NavItems name="Home" /> </li>
                        <li> <NavItems name="About" /> </li>
                        <li> <NavItems name="Services" /> </li>
                        <li> <NavItems name="Contact" /> </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
