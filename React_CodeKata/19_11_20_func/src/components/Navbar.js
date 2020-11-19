import React from 'react'
import NavItems from './NavItems';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <h1 className="nav__logo"> React App </h1>
                <ul>
                    <NavItems toLink="/" name="Home" />
                    <NavItems toLink="/about" name="About" />
                    <NavItems toLink="/project" name="Project" />
                    <NavItems toLink="/contact" name="Contact" />
                </ul>
                <div>
                    <button> Login </button>
                    <button> Register </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
