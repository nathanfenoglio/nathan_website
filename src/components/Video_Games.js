import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import title_screenshot_escape_from_uta from "../images/Title_Screen_Screenshot.jpg";
import "./Video_Games.css";

export default class Video_Games extends Component{
	render(){
		return(
			<div className="video-games-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Video Games</h1>
				<br/><br/><br/>
				<h1 className="game-title">Escape From Underground Terrestrial Abyss</h1>
				<img className="game-static-image" src={title_screenshot_escape_from_uta}/>
				<h2 className="play-game">Play Game!!! I compel you</h2>
				
				<div style={{ backgroundColor: "black", paddingTop: "2vw", paddingBottom: "5vw" }}>
					<p className="directions">Click On One Of The Links Below</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://simmer.io/@nathanfenoglio/escape-from-underground-terrestrial-abyss">Play Game With Keyboard Controls</a>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://simmer.io/@nathanfenoglio/escape-from-underground-terrestrial-abyss-mobile-controls">Play Game With Touch Screen Controls</a>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.TheATeam.EscapeFromUndergroundTerrestrialAbyss">Google Play</a>
				</div>

				<div style={{ backgroundColor: "black", width: "40vw", marginLeft: "30vw"}}>
					<h4 className="dev-team-title">Development Team:</h4>
					<li className="dev-team-members">Samuel Schreiner</li>
					<li className="dev-team-members">Hoang Ho</li>
					<li className="dev-team-members">Hieu Vu</li>
					<li className="dev-team-members">Debbie Nguyen</li>
					<li className="dev-team-members">Nathan Fenoglio</li>
					
				</div>

				<div style={{ backgroundColor: "black", marginBottom: "10vw", paddingTop: "0vw", paddingBottom: "5vw" }}>
					<h3 className="cubeland-sol-path">Cubeland Solution Path</h3>
					<h3 className="spoiler-alert">SPOILER ALERT</h3>
					<h4 style={{color: 'white', fontSize: '3vw'}}>If you find yourself lost and don’t have the time to ponder the cube to get your keys back</h4>
					<Link to="/Cubeland_Solution_Path" className="view-solution">View Cubeland Solution Path</Link>
					<h3 className="spoiler-alert">Watch Playthrough</h3>
					<iframe className="youtube-link" src="https://www.youtube.com/embed/ar7niKAHrWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio/Escape-From-Underground-Terrestrial-Abyss">Check out code on GitHub</a>
				</div>
			</div>
		)
	}
}