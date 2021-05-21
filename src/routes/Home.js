import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CloseButton from '../components/CloseButton';
import GitHub from '../images/GitHub-Mark-Light-64px.png';
import Linkedin from '../images/linkedin-64.ico';
import Email from '../images/email-64.ico';
import '../style/home.css';

export default function Home() {

    const [popup1, setPopUp1] = useState(false);
    const [popup2, setPopUp2] = useState(false);
    const [popup3, setPopUp3] = useState(false);
    const [popup4, setPopUp4] = useState(false);

    const details1 = () => {
        if (popup1) {
            setPopUp1(false);
        } else {
            setPopUp1(true);
        }
    };
    const details2 = () => {
        if (popup2) {
            setPopUp2(false);
        } else {
            setPopUp2(true);
        }
    };
    const details3 = () => {
        if (popup3) {
            setPopUp3(false);
        } else {
            setPopUp3(true);
        }
    };
    const details4 = () => {
        if (popup4) {
            setPopUp4(false);
        } else {
            setPopUp4(true);
        }
    };
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
                    <button onClick={details1} className='project1' aria-label='Centered'></button>
                    <button onClick={details2} className='project2' aria-label='Centered'></button>
                    <button onClick={details3} className='project3' aria-label='Centered'></button>
                    <button onClick={details4} className='project4' aria-label='Centered'></button>
                </div>
                {popup1 && (
                    <div className='project-details'>
                        <h2>WEATHER APP</h2>
                        <div className='weather-app'></div>
                        <div className='text-container'>
                            <p>Simple weather app with two different UI.</p>
                            <p>App made for training purpose with Neumorphism and Glassmorphism style.</p>
                            <p>Techno used : React, NPM, JS, Styled components, API call.</p>
                            <button className='netlify-button' onClick={() => window.open('https://loving-raman-112067.netlify.app/', '_blank')}>NETLIFY LINK</button>
                        </div>
                        <div onClick={details1}>
                            <CloseButton />
                        </div>
                    </div>
                )}
                {popup2 && (
                    <div className='project-details'>
                        <h2>ART WEBSITE</h2>
                        <div className='art1'></div>
                        <div className='art2'></div>
                        <div className='art3'></div>
                        <div className='art4'></div>
                        <div className='text-container'>
                            <p>Comics style art website for my friend's drawing.</p>
                            <p>Still under construction, mobile only at the moment.</p>
                            <p>The whole app has been made with 1 styled component using props.</p>
                            <p>Techno used : React, React-router, NPM, JS, Styled components.</p>
                        </div>
                        <div onClick={details2}>
                            <CloseButton />
                        </div>
                    </div>
                )}
                {popup3 && (
                    <div className='project-details'>
                        <h2>TEMPERA</h2>
                        <div className='tempera1'></div>
                        <div className='tempera2'></div>
                        <div className='tempera3'></div>
                        <div className='tempera4'></div>
                        <div className='text-container'>
                            <p>24 hour hackathon at Wild Code School.</p>
                            <p>Tablets only app which 'takes' pictures in black and white and colorize them!</p>
                            <p>We were a team of 5 students.</p>
                            <p>Techno used : React, React-router, NPM, API call, JS.</p>
                        </div>
                        <div onClick={details3}>
                            <CloseButton />
                        </div>
                    </div>
                )}
                {popup4 && (
                    <div className='project-details'>
                        <h2>WILD UNIVERSE</h2>
                        <div className='universe'></div>
                        <div className='text-container-universe'>
                            <p>Simple website about our universe.</p>
                            <p>First project of the bootcamp at Wild Code School.</p>
                            <p>We were a team of 4 students.</p>
                            <p>Fully responsive.</p>
                            <p>Techno used : HTML, CSS, JS.</p>
                            <button className='netlify-button' onClick={() => window.open('https://stoic-mcnulty-b4f347.netlify.app/', '_blank')}>NETLIFY LINK</button>
                        </div>
                        <div onClick={details4}>
                            <CloseButton />
                        </div>
                    </div>
                )}
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
