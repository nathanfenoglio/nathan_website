import React, { Component } from 'react';
import './Web_Apps.css';
import cube_maze_image from "../images/CubeMazeImage.jpg";
import cube_map_image from "../images/CubeMazeMap.jpg";

export default class Web_Apps extends Component{
	render(){
		return(
			<div className="web-apps-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Web Apps</h1>

				<div style={{ backgroundColor: "black", paddingTop: "2vw", paddingBottom: "5vw" }}>
					<p className="directions">3D Folded Cube Maze</p>
					<p className="comments">for play on desktop with keyboard arrow controls</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://nathanfenoglio.github.io/cube_maze/">Play 3D Folded Cube Maze</a>
					<p className="comments">HERE'S A MAP OF THE MAZE</p>
					<img className="game-static-image" src={cube_map_image}/>
					<img className="game-static-image" src={cube_maze_image}/>
					<br/>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://nathanfenoglio.github.io/multi_dimensional_mazes/">More 3D Mazes</a>
				</div>

			</div>
		)
	}
}