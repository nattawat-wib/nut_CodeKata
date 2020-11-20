import React, { Component } from 'react'
import NavItems from './NavItems';
import NavButton from './NavButton';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav container">
                    <h1 className="nav__logo"> React Port </h1>
                    <ul>
                        <NavItems name="Home" to="/" />
                        <NavItems name="About" to="/about" />
                        <NavItems name="Skill" to="/skill" />
                        <NavItems name="Contact" to="/contact" />
                    </ul>
                    <div>
                        <NavButton text="Login" />
                        <NavButton text="Register" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
