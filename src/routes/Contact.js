import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/contact.css';

export default function Contact() {

    const [popup, setPopUp] = useState(false);
    const confirm = () => {
        if (popup) {
            setPopUp(false);
        } else {
            setPopUp(true);
        }
    };
    return (
        <section className='contact'>
            <h1>CONTACT ME</h1>
            <form>
                <input className='contact-name' type="text" name="_name" required placeholder='Your Name' />
                <input className='contact-email' type="email" name="_email" required placeholder='Your email' />
                <textarea rows="5" cols="30" name="message" required placeholder='Your message' />
                <input onClick={confirm} className="send-button" type="submit" value="SEND" />
            </form>
            {popup && (
                <div className='thanks-popup'>
                    <h2>Thank you very much!</h2>
                    <h3>I will come back to you quickly!</h3>
                 <Link to='./'><p>Close</p></Link>
                </div>
            )}
        </section>
    )
}
