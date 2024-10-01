import {Helmet} from "react-helmet";
import Breadcrumb from "/src/layouts/Breadcrumb";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>eTrade | Contact With Us</title>
            </Helmet>
            <Breadcrumb/>
            <div className="container">
                <div className="contact-box">
                    <div className="left-side">
                        <h4 className="main-head">
                            We would love to hear from you.
                        </h4>
                        <p className="contact-text">
                            If you’ve got great products your making or looking to work with us then drop us a line.
                        </p>
                        <form>
                            <div className="contact-form">
                                <div className="form-group">
                                    <label className={'absolute-item'}>
                                        <span>Name</span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className={'form-control'} name={'firstname'}/>
                                </div>
                                <div className="form-group">
                                    <label className={'absolute-item'}>
                                        <span>Phone</span>
                                        <span>*</span>
                                    </label>
                                    <input type="text" className={'form-control'} name={'phone'}/>
                                </div>
                                <div className="form-group">
                                    <label className={'absolute-item'}>
                                        <span>E-mail</span>
                                        <span>*</span>
                                    </label>
                                    <input type="email" className={'form-control'} name={'email'}/>
                                </div>
                                <div className="form-group form-item">
                                    <label className="absolute-item">
                                        <span>Your message</span>
                                    </label>
                                    <textarea className={'form-control'} name="message" rows="10"></textarea>
                                </div>
                            </div>
                            <button type="submit" className={'btn btn-blue'}>Send message</button>
                        </form>
                    </div>
                    <div className="right-side">
                        <h4 className="main-head">Our Store</h4>
                        <ul className="company-info">
                            <li>
                                8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America
                            </li>
                            <li>
                                Phone: <a href="tel:+123 456 7890">+123 456 7890</a>
                            </li>
                            <li>
                                Email: <a href="mailto:hello@etrade.com">Hello@etrade.com</a>
                            </li>
                        </ul>
                        <h4 className="main-head">Careers</h4>
                        <ul className="company-info">
                            <li>
                                Instead of buying six things, one that you really like.
                            </li>
                        </ul>
                        <h4 className="main-head">Opening Hours</h4>
                        <ul className="company-info">
                            <li>
                                Monday to Saturday: 9am - 10pm
                            </li>
                            <li>
                                Sundays: 10am - 6pm
                            </li>
                        </ul>
                    </div>
                    <div className="company-location">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.1835974612336!2d49.861086075482575!3d40.41003005604799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4600664c97%3A0x3871b29144bdd1e!2sAynal%C4%B1%20Plaza!5e1!3m2!1sen!2saz!4v1727761992084!5m2!1sen!2saz"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;