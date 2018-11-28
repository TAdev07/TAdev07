import React from 'react';
import './NavLink.css';

export default function NavLink() {
    return (
        <nav className="margin-bottom-30">
            {/* Brand and toggle get grouped for better mobile display */}
            <button type="button" className="navbar-toggle">
                <span className="nav-title">MENU</span>
                <span className="fa fa-navicon icon-nav" />
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="navbar-collapse" id="nav-tabis">
                <ul className="isop-filter nav nav-pills">
                    <li className="active">
                        <a href="#about-me">
                            <i className="fa fa-user-o" />
                            ABOUT ME
                        </a>
                    </li>
                    <li>
                        <a href="#resume">
                            <i className="fa fa-book" />
                            RESUME
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            <i className="fa fa-rocket" />
                            PORTFOLIO
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            <i className="fa fa-pencil-square-o" />
                            BLOG
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <i className="fa fa-pencil" />
                            CONTACT ME
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
