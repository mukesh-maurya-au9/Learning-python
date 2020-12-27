import React, { Fragment } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Fragment>
            <div className="topnav">
                <div>
                <Link to="/">Trip-India</Link>
                <Link to="/">Home</Link>
                <Link to="/ViewBookings">Booking</Link>
                </div>
                <div>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
};

export default Header;