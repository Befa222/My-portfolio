import React from 'react';
import '../style/home.css';

export default function Home() {
    return (
        <div>
            <header className='intro'>
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
                <div className='intro-break'></div>
            </header>
            <section className='about-me'>
                <h2>Welcome</h2>
                <p>I am a web dev from France living in London for 12 years.</p>
                <p>I'am passionate about CSS and animations and I am always trying to do everything "home made" before relying on Bootstrap or npm packages.</p>
                <p>This portfolio showcases some team projects done during my time learning web development at Wild Code School, as well as a couple of solo projects done afterward.</p>
                <h3>I hope you'll enjoy the tour!</h3>
                <div className='about-me-break'></div>
            </section>
        </div>
    )
}
