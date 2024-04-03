import React from 'react';
import './css/Header.css';

function Header({ handleChange, searchTerm }) {
    return (
        <div className="header">
            <div className="logo">
                <a href="https://clipart-library.com/img1/1424686.png">
                    <img id="logo" src="https://clipart-library.com/img1/1424686.png" alt="" />
                </a>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
            </div>
            <div>
                <a href="">Log in</a>
                <a href="">Sign up</a>
            </div>
        </div>
    );
}

export default Header;
