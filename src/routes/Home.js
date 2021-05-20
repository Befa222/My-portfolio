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
                    <h3 id='lastName'>Lallement</h3>
                </div>
            </header>
        </div>
    )
}
