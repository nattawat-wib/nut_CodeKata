import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavItems extends Component {
    render() {
        return <li> <NavLink activeClassName="navActive" to={this.props.to}> {this.props.name} </NavLink> </li>
    }
}

export default NavItems
