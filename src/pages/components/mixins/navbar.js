import React from 'react';
import nav_logo from '../../../static/img/navbar/logo.png';
import nav_link_arrow from '../../../static/img/navbar/arrow_down.png';

class Navbar extends React.Component {
    render () {
        return (
            <nav className="navigation">
                <div className="navigation__container">
                    <div className="navigation__container--logo">
                        <img src={nav_logo} alt="logo navbar with 2 balls and two shades"/>
                    </div>
                    <div className="navigation__container--links">
                        <a className="nav-link" href="https://www.github.com/ytd/docs.md">API</a>
                        <div className="nav-link">My Videos</div>
                        <div className="nav-link">
                            My Account 
                            <img className="nav-link--img" src={nav_link_arrow} alt="arrow button to expand my account"/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;