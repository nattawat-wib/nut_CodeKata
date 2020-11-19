import React, { Component } from 'react'
import NavItems from './NavItems';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="navbar">
                    <h1 className="nav__logo"> React App </h1>
                    <ul>
                        <li> <NavItems toLink="/" name="Home" /> </li>
                        <li> <NavItems toLink="about" name="About" /> </li>
                        <li> <NavItems toLink="services" name="Services" /> </li>
                        <li> <NavItems toLink="contact" name="Contact" /> </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
