import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'

const Navs = () => {
    

    return (
        <div className="navs">
            <button>Home</button>
            <div className="searchBar">
                <input id="input" type="text" placeholder="search by model..."/> 
                <BiSearchAlt className="searchIcon"/>
            </div>
            
            
            <button>cart</button>
        </div>
    )
}

export default Navs
