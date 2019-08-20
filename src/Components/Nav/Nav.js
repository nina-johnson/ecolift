import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {

    let scrollToLocation = () => {
        alert('Clicked! Need to add animation function here.')
        // $('.navbar-collapse ul li a').on('click', function() {  
        //     $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
        //     return false;
        // });
    }


    return (
        <div className="nav" >

            <a className="nav-title" href="#home" > {/* className="App-header" */}
                <img src="images/EcoLift_logo.png" alt="EcoLift" />
                {/* <h5>Concrete Raising & Leveling</h5> */}
            </a>

            <div className="nav-right" >
                <a className="nav-link" href="#services" >
                    Our Services
                </a>

                <a className="nav-link" href="#about" >
                    About Mudjacking
                </a>

                <a className="nav-link" href="#contact" onClick={scrollToLocation} >
                    Contact Us
                </a>

                {/* This should route to separate page? */}
                <a className="nav-link" href="#faq" >
                    FAQ
                </a>

            </div>


        </div>
    );
}

export default Nav;