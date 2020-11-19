import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavItems extends Component {
    render() {
        return (
            <div>
                <Link activeClassName="navActive"> {this.props.name} </Link>
            </div>
        )
    }
}

export default NavItems
