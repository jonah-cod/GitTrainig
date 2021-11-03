import React from 'react'
import brand from "../../images/pearlmotors-removebg-preview.png"
import Navs from './navs'

const Nav = () => {
    return (
        <div className="navBar">
            <img src={brand} alt="" />
            <Navs/>
        </div>
    )
}

export default Nav
