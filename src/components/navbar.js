import React from 'react';
import {Link } from 'react-router-dom';


const NavbarComp = () => {

    return (

    <div className="navbar">
        <h3>MERN Tracker</h3>
        <nav className="main-navbar">
            <div className="nav-link">
                <Link to="/">Exercise List</Link>
            </div>
            <div className="nav-link">
                <Link to="/edit/:id">Edit Exercise</Link>
            </div>
            <div className="nav-link">
                <Link to="/create">Create Exercise</Link>
            </div>
            <div className="nav-link">
                <Link to="/user">Create User</Link>
            </div>
        </nav>
    </div>

    );

};

export default NavbarComp;