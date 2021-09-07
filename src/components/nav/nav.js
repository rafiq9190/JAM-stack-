import React from 'react'
import {Link} from 'gatsby'
import {navbar} from './nav.module.css'



export const Nav=()=>{
    return(
        <>
     <div className={navbar}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>        
    </div>
    </>
    )
}

