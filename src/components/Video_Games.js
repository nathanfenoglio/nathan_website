import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Video_Games extends Component{
	render(){
		return(
			<div>
				<h1>Video Game Stuff ok?</h1>
				<h1>Escape From Underground Terrestrial Abyss</h1>
				
				<h3>Cubeland Solution Path</h3>
				<h3 style={{color:'red'}}</h3>
				<h4>If you find yourself lost and don’t have the time to ponder the cube to get your keys back</h4>
				<Link to="/Cubeland_Solution_Path">View Cubeland Solution Path</Link>
				
			</div>
		)
	}
}