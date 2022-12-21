
import React from 'react';
import "./Header.scss"
function Header() {
  return (
    <ul id="menu">
        <li data-menuanchor="home"><a href="#home">Home</a></li>
        <li data-menuanchor="aboutme"><a href="#aboutme">About</a></li>
        <li data-menuanchor="portfolio"><a href="#portfolio">Portfolio</a></li>
    </ul>
  );
}

export default Header;


