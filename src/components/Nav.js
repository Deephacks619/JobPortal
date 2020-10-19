/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav  class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <Link to="/" className="Title">
                    Job Finder
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <li class="nav-item" className="li">
                        <Link to="/" style={{color: 'white',fontFamily:'revert'}}>Home</Link>
                    </li>
                    <li class="nav-item" className="li">
                        <Link to="/JobSeekerPage" style={{color: 'white',fontFamily:'revert'}}>JobSeekerPage</Link>
                    </li>
                    <li class="nav-item" className="li">
                        <Link to="/Login" style={{color: 'white',fontFamily:'revert'}}>Login</Link>
                    </li>
                    <li class="nav-item" className="li">
                        <Link to="/Register" style={{color: 'white',fontFamily:'revert'}}>Register</Link>
                    </li>    
                    </ul>
                </div>  
                </nav>
            </div>
        );
    }
}

export default Nav;