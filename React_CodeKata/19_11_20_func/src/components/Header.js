import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <header>
            <h1 className="header__text" > This Website is made by React </h1>
            <ReactTypingEffect text={["Nattawat", "Front-End", "Web Developer"]}
                className="header__typing" speed={60} typingDelay={400} eraseSpeed={80} eraseDelay={800} staticText="I'm" />
            <button> Get Started </button>
        </header>
    )
}

export default Header
