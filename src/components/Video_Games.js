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
				<p className="directions">Click On One Of The Links Below</p>
				<a className="links" target="_blank" rel="noopener noreferrer" href="https://simmer.io/@nathanfenoglio/escape-from-underground-terrestrial-abyss">Play Game With Keyboard Controls</a>
				<br/>
				{/*<iframe src="https://i.simmer.io/@nathanfenoglio/escape-from-underground-terrestrial-abyss" style={{width: "960px", height: "600px"}}></iframe>*/}
				<a className="links" target="_blank" rel="noopener noreferrer" href="https://simmer.io/@nathanfenoglio/escape-from-underground-terrestrial-abyss-mobile-controls">Play Game With Touch Screen Controls</a>

				<h4 className="dev-team-title">Development Team:</h4>
				<li className="dev-team-members">Samuel Schreiner</li>
				<li className="dev-team-members">Hoang Ho</li>
				<li className="dev-team-members">Hieu Vu</li>
				<li className="dev-team-members">Debbie Nguyen</li>
				<li className="dev-team-members">Nathan Fenoglio</li>
				<br/>
				
				<h3 className="cubeland-sol-path">Cubeland Solution Path</h3>
				<h3 className="spoiler-alert">SPOILER ALERT</h3>
				<h4 style={{color: 'white', fontSize: '3vw'}}>If you find yourself lost and don’t have the time to ponder the cube to get your keys back</h4>
				<Link to="/Cubeland_Solution_Path" className="view-solution">View Cubeland Solution Path</Link>
				
			</div>
		)
	}
}