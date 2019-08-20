import React, {Component} from 'react';

class Contact extends Component {


    render() {
        return (
            <div id="contact" className="contact" >
                <h2>Contact Us</h2>

                <div className="contact-left">
                    <form>
                        <input type="text" name="name" placeholder="Name"
                            className="contact-input" />
                            <br/>
                        <input type="text" name="email" placeholder="Email"
                            className="contact-input" />
                            <br/>
                        <input type="text" name="phone" placeholder="Phone Number"
                            className="contact-input" />
                            <br/>
                        <textarea type="text" rows="3" name="address" placeholder="Address"
                            className="contact-input" />
                            <br/>
                        <textarea type="text" rows="6" name="message" placeholder="Message"
                            className="contact-input" />
                            <br/>

                        <button type="submit" className="contact-submit-button" >Send</button>
                    </form>
                </div>

                <div className="contact-right" >
                    <p><i>phone</i> 651-927-558</p>
                    <p><i>mail</i> jay@myecolift.com</p>
                    <p>
                        Contact us to schedule your FREE Estimate or find out more about mudjacking. In an effort to stay green and pass on savings to you, we often ask our customers to text or email pictures of the problem areas.  If we are unable to quote from the pictures, one of our trained estimators will come to your site to provide you with the cost to complete the work.

                        Thank you for considering EcoLift Concrete Raising, Inc. We look forward to serving you!
                    </p>
                </div>

            </div>
        );
    }
}

export default Contact;