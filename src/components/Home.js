import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
		{window.scrollTo(0, 0)}
        <div className='home-content-box'>
            <h1>Nathan Fenoglio</h1>
            <div className='blah-blah-1' style={{ backgroundColor: "#666" }}>
                <p className='main-description'>Software Engineering, Bass Playing, Electronic Music Producing Explorer</p>
            </div>

            <h2 style={{ marginTop: "5%" }}>Software Engineering</h2>
            <div className='blah-blah-1'>
                <p className='category-description'>Studying Computer Science at the Universtiy of Texas at Arlington Graduating 2023. <br/>Interested in game design, incorporating software with music creation, programming to solve whatever task presents itself.</p>
                <br/>
                <p className='category-description'>Check out some projects that I have worked on</p>
                <Link className="link" to="/Code_Projects">Code Projects</Link>
                <Link className="link" to="/Video_Games">Video Games</Link>
                <Link className="link" to="/Web_Apps">Web Apps</Link>
			    <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio">GitHub</a>
            </div>

            <h2 style={{ marginTop: "5%" }}>Bass Playing</h2>
            <div className='blah-blah-1'>
                <p className='category-description'>I have been playing electric bass for many years involving different styles such as prog, funk, fusion, hip hop, metal, and more</p>
                <p className='category-description'>Check out some projects that I have worked on</p>
                <p className='list'>Wrought of Obsidian <br/>Parallel Realities <br/>Harry Has a Head Like a Ping Pong Ball <br/> </p>
                <Link className="link" to="/Music">Music</Link>
            </div>
            <h2 style={{ marginTop: "5%" }}>Electronic Music Producing</h2>
            <div className='blah-blah-1'>
                <p className='category-description'>I have been exploring composition methods for electronic music creation</p>
                <br/>
                <p className='category-description'>Have a listen</p>
                <Link className="link" to="/Music">Music</Link>
                <a className="link" target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/flimmflamm23">Listen on Soundcloud</a>
            </div>
            <h2 style={{ marginTop: "5%" }}>Contact Me</h2>
            <div className='blah-blah-1'>
                <p className='list' style={{marginTop: "5%"}}>nathanrfenoglio@gmail.com</p>
                <a className="link" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/nathan-fenoglio-b0a148a2">Linked In</a>
                <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nathan.fenoglio">Facebook</a>
            </div>
            {/* just messing */}
            <h2 style={{ marginTop: "5%" }}>Flam</h2>

        </div>
    </div>
  )
}

export default Home