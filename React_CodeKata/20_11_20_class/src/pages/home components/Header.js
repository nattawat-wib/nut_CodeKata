import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import NavButton from '../../component/NavButton';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1> React Welcome </h1>
                <ReactTypingEffect text={["I'm Nattawat", "I'm Web developer", "I'm Front-End", "This website made by React"]}
                speed={60} typingDelay={500} eraseSpeed={40} eraseDelay={1000} 
                className="header__typing-text"/>
                <NavButton text="Get Started" />
            </header>
        )
    }
}

export default Header
