import React, { Component } from 'react';
import './Web_Apps.css';
import cube_maze_image from "../images/CubeMazeImage.jpg";
import cube_map_image from "../images/CubeMazeMap.jpg";
import multi_d_mazes_with_3D_rotations_image from "../images/MultiDimensionalMazesWith3DRotationsImage.JPG";

export default class Web_Apps extends Component{
	render(){
		return(
			<div className="web-apps-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Web Apps</h1>

				<div style={{ backgroundColor: "black", paddingTop: "2vw", paddingBottom: "5vw" }}>
					<p className="directions">Multi Dimensional Mazes With 3D Perspective Rotations</p>
					<p className="comments">for play on desktop with keyboard arrow controls</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://nathanfenoglio.github.io/multi_dimensional_mazes_with_3D_rotations/">Play Multidimensional Mazes With 3D Rotations</a>
					<br/>
					<img className="game-static-image" src={multi_d_mazes_with_3D_rotations_image}/>					
					<p className="comments" style={{fontSize: "4vw"}}>Play generated 3D mazes represented as a series of connected 2D planes</p>
					<p className="comments" style={{fontSize: "4vw"}}>Ability to rotate player's perspective up/down left/right in/out <br/>as you attempt to solve each maze</p>
					<p className="comments" style={{fontSize: "4vw"}}>Keyboard Controls:<br/>UP ARROW - up<br/>DOWN ARROW - down<br/>LEFT ARROW - left<br/>RIGHT ARROW - right<br/>ENTER - in<br/>SHIFT - out<br/></p>
					<p className="comments" style={{fontSize: "4vw"}}>w - rotate perspective up<br/>s - rotate perspective down<br/>a - rotate perspective left<br/>d - rotate perspective right<br/><br/></p>
					<p className="comments" style={{fontSize: "4vw"}}>Cells' Color Codes:</p>
					<p className="comments" style={{fontSize: "4vw"}}>Purple Cell - can go in<br/>Green Cell - can go out<br/>Orange Cell - can go in/out<br/>Pink Cell - no in/out</p>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio/multi_dimensional_mazes_with_3D_rotations">Check out code on GitHub</a>




					<p className="directions">3D Folded Cube Maze</p>
					<p className="comments">for play on desktop with keyboard arrow controls</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://nathanfenoglio.github.io/cube_maze/">Play 3D Folded Cube Maze</a>
					<p className="comments">HERE'S A MAP OF THE MAZE</p>
					<img className="game-static-image" src={cube_map_image}/>
					<img className="game-static-image" src={cube_maze_image}/>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio/cube_maze">Check out code on GitHub</a>
					<br/>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://nathanfenoglio.github.io/multi_dimensional_mazes/">More 3D Mazes</a>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio/multi_dimensional_mazes">Check out code on GitHub</a>
				</div>

			</div>
		)
	}
}