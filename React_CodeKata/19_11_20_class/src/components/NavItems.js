import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavItems extends Component {
    render() {
        return (
            <div>
                <NavLink exact activeClassName="navActive" to={this.props.toLink} > {this.props.name} </NavLink>
            </div>
        )
    }
}

export default NavItems
