import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <div className="header">
            <Link className="app-title" to="/">
                <h1>NoteTaker</h1>
            </Link>
            <nav className="navigation">
                <ul className="nav-container">
                    <li className="nav-item">
                        <Link to="/">Notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="profile">My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about">About NoteTaker</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
