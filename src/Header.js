import React from 'react';
import image from "./images/santa.svg";

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <img src={image} className="header__image" alt="santa"/>
            </a>
            <h1>Papá Noel secreto</h1>
            <p className="subtitle">No hagan trampa!</p>
        </div>
    )
}

export default Header;