import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className="navBar">
            <div>
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/"
                exact
                >
                Home
            </NavLink>
            </div>
            
        </div>
    )
}

export default Header
