import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Video_Games extends Component{
	render(){
		return(
			<div>
				<h1>Video Game Stuff ok?</h1>
				<h1>Escape From Underground Terrestrial Abyss</h1>
				
				<h3>Cubeland Solution Path</h3>
				{/*
				<Link to="/Cubeland_Solution_Path.mht">Cubeland Solution Path</Link>
				<iframe className="docx" width="100%" height="600" frameborder="0" src="/Cubeland_Solution_Path.docx"></iframe>
				*/}
				<iframe src= "/Cubeland_Solution_Path.mht" width="100%" height="800"> </iframe>
			</div>
		)
	}
}