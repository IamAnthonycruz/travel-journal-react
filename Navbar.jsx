import React from "react";
const Navbar=(props)=>{
    return(
            <nav className="nav">
                <img src="./Globe.png" className="globe-img" />
                <p className="nav-text">{props.text}</p>
            </nav>
       
    )
}
export default Navbar;