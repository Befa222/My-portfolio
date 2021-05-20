import React from 'react';
import { Link } from 'react-router-dom';
import GitHub from '../images/GitHub-Mark-Light-64px.png';
import Linkedin from '../images/linkedin-64.ico';
import Email from '../images/email-64.ico';
import '../style/home.css';

export default function Home() {
    return (
        <div>
            <header>
                <div className='neon-sign'>
                    <div id='firstName'>
                        <h1 className='letter-F'>F</h1>
                        <h1 className='letter-A'>A</h1>
                        <h1 className='letter-B'>B</h1>
                        <h1 className='letter-I'>I</h1>
                        <h1 className='letter-E'>E</h1>
                        <h1 className='letter-N'>N</h1>
                    </div>
                    <h2 id='lastName'>Lallement</h2>
                </div>
                <div className='header-break'></div>
            </header>
            <section className='about-me'>
                <h2>Welcome</h2>
                <p>I am a web dev from France living in London for 12 years.</p>
                <p>I'am passionate about CSS and animations and I am always trying to do everything "home made" before relying on Bootstrap or npm packages.</p>
                <p>This portfolio showcases some team projects done during my time learning web development at Wild Code School, as well as a couple of solo projects done afterward.</p>
                <h3>I hope you'll enjoy the tour!</h3>
                <div className='about-me-break'></div>
            </section>
            <section className='projects'>
                <h1>PROJECTS</h1>
                <div className='projects-container'>
                    <div className='project1'></div>
                    <div className='project2'></div>
                    <div className='project3'></div>
                    <div className='project4'></div>
                </div>

            </section>
            <footer>
                <div className='footer-break-top'></div>
                <h1>LINKS/CONTACT</h1>
                <div className='links-container'>
                    <img onClick={() => window.open('https://github.com/Befa222', '_blank')} src={GitHub} alt='Github-icon' />
                    <img onClick={() => window.open('https://www.linkedin.com/in/fabien-lallement-b10386204/', '_blank')} src={Linkedin} alt='Linkedin-icon' />
                    <Link to='./Contact'><img src={Email} alt='email-icon' /></Link>
                </div>
                <div className='footer-break-bottom'></div>
                <p>'D2S./2021'</p>
            </footer>
        </div>
    )
}
