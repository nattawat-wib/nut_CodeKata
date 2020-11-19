import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return (
            <header>
                <h2> This Website is made by ReactJS </h2>
                <ReactTypingEffect text={["Hello React", "Welcom, to my Website", "I'm Web Developer"]} 
                 speed={80} typingDelay={800} eraseSpeed={80} eraseDelay={800} />
            </header>
        );
    }
}

export default Home;    
