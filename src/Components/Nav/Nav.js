import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    return (
        <div className="nav" >

            <Link className="nav-title" to="/home" > {/* className="App-header" */}
                <img src="images/EcoLift_logo.png" alt="EcoLift" />
                {/* <h5>Concrete Raising & Leveling</h5> */}
            </Link>

            <div className="nav-right" >
                <Link className="nav-link" to="/about" >
                    About Mudjacking
                </Link>

                <Link className="nav-link" to="/services" >
                    Our Services
                </Link>

                <Link className="nav-link" to="/contact" >
                    Contact Us
                </Link>

                <Link className="nav-link" to="/faq" >
                    FAQ
                </Link>

            </div>


        </div>
    );
}

export default Nav;