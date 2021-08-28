import React, { Component } from 'react';
import './Web_Apps.css';
import cube_maze_image from "../images/CubeMazeImage.jpg";

export default class Web_Apps extends Component{
	render(){
		return(
			<div className="web-apps-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Web Apps</h1>

				<div style={{ backgroundColor: "black", paddingTop: "2vw", paddingBottom: "5vw" }}>
					<p className="directions">3D Folded Cube Maze</p>
					<img className="game-static-image" src={cube_maze_image}/>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://nathanfenoglio.github.io/cube_maze/">Play 3D Folded Cube Maze</a>
					<br/>
				</div>

			</div>
		)
	}
}