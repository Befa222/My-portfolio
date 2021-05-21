import React from 'react';
import '../style/contact.css';

export default function Contact() {
    return (
        <div>
            <section className='contact'>
                <h1>CONTACT ME</h1>
                <form>
                    <label>Name</label>
                    <input type="text" name="_name" required />
                    <label>Email</label>
                    <input type="email" name="_email" required />
                    <label>Your message</label>
                    <textarea rows="5" cols="30" name="message" required />
                    <input className="send-button" type="submit" value="SEND" />
                </form>
            </section>
        </div>
    )
}
