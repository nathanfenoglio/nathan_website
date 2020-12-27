import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import title_screenshot_escape_from_uta from "../images/Title_Screen_Screenshot.jpg";

export default class Video_Games extends Component{
	render(){
		return(
			<div>
				<h1 style={{color: 'white', fontSize:200}}>Video Games</h1>
				<br/><br/><br/>
				<h1 style={{color: 'red', fontSize:100}}>Escape From Underground Terrestrial Abyss</h1>
				<img style= {{flex:1 , width: undefined, height: undefined}} src={title_screenshot_escape_from_uta}/>
				<h4 style={{color: 'yellow', fontSize: 75}}>Development Team:</h4>
				<li style={{color: 'yellow', fontSize: 60}}>Samuel Schreiner</li>
				<li style={{color: 'yellow', fontSize: 60}}>Hoang Ho</li>
				<li style={{color: 'yellow', fontSize: 60}}>Hieu Vu</li>
				<li style={{color: 'yellow', fontSize: 60}}>Debbie Nguyen</li>
				<li style={{color: 'yellow', fontSize: 60}}>Nathan Fenoglio</li>
				<br/>
				
				<h3 style={{color: 'white'}}>Cubeland Solution Path</h3>
				<h3 style={{color:'red', fontsize: 50}}>SPOILER ALERT</h3>
				<h4 style={{color: 'white'}}>If you find yourself lost and don’t have the time to ponder the cube to get your keys back</h4>
				<Link to="/Cubeland_Solution_Path" style={{fontSize: 60}}>View Cubeland Solution Path</Link>
				
			</div>
		)
	}
}