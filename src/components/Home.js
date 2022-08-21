import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
		{window.scrollTo(0, 0)}
        <div className='home-content-box'>
            <h1>Nathan Fenoglio</h1>
            <div className='blah-blah-1'>
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
                <p className='category-description'>I have been playing electric bass for many years involving many styles such as prog, funk, fusion, hip hop, metal, and more</p>
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
        </div>
    </div>
  )
}

export default Home