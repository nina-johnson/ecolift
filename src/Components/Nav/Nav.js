import React from 'react';
import ReactDOM from 'react-dom';
// import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {

    let scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    let scrollToLocation = () => {
        // const loc = ReactDOM.findDOMNode('#contact');

        // console.log( loc );
        
        window.scrollTo({
            behavior: 'smooth'
        })
    }

        // $('.navbar-collapse ul li a').on('click', function() {  
        //     $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
        //     return false;
        // });

    return (
        <div className="nav" >

            <div className="nav-title" href="#home" onClick={scrollToHome} > {/* className="App-header" */}
                <img src="images/EcoLift_logo.png" alt="EcoLift" />
                {/* <h5>Concrete Raising & Leveling</h5> */}
            </div>

            <div className="nav-right" >
                <a className="nav-link" href="#services" >
                    Our Services
                </a>

                <a className="nav-link" href="#about" >
                    About Mudjacking
                </a>

                <a className="nav-link" href="#contact" onClick={scrollToLocation()} >
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