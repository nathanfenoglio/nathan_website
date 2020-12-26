import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import './App.css';

import Music from "./components/Music";
import Video_Games from "./components/Video_Games";
import Cubeland_Solution_Path from "./components/Cubeland_Solution_Path";
import Code_Projects from "./components/Code_Projects";
import Web_Apps from "./components/Web_Apps";
import Misc from "./components/Misc";

import Image_1 from "My_Face_186.png";
import Image_2 from "My_Face_187.png";
import Image_3 from "My_Face_188.png";

/*
const slideImages = [
	'.images/My_Face_186.png',
	'.images/My_Face_187.png',
	'.images/My_Face_188.png'
];
*/
const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	onChange: (oldIndex, newIndex) => {
		console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	}
}

//function App() {
class App extends Component{
	render(){
		  return (
			<Router>
				<div className="App">
					<Navbar />
					<br/>
					<Route path="/Music" exact component={Music} />
					<Route path="/Video_Games" exact component={Video_Games}/>
					<Route path="/Cubeland_Solution_Path" exact component={Cubeland_Solution_Path}/>
					<Route path="/Code_Projects" exact component={Code_Projects}/>
					<Route path="/Web_Apps" exact component={Web_Apps}/>
					<Route path="/Misc" exact component={Misc}/>
					  <header className="App-header">
					  
					  {/*
						<p>
							<br/><br/><br/>
						  <iframe width="560" height="315" src="https://www.youtube.com/embed/jTS6Jh6uF40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/5Vk0QhhUjtM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</p>
					  */}
					  
					  
						<a>Flamm</a>
					  </header>
					  
					<div className="slide-container">
						<Slide {...properties}>
							<div className="each-slide">
								<div style={{'backgroundImage': {Image_1}}}>
									<span>Slide 1</span>
								</div>
							</div>
							<div className="each-slide">
								<div style={{'backgroundImage': {Image_2}}}>
									<span>Slide 2</span>
								</div>
							</div>
							<div className="each-slide">
								<div style={{'backgroundImage': {Image_3}}}>
									<span>Slide 3</span>
								</div>
							</div>
						</Slide>
					</div>
				</div>
			</Router>
		  );
	}
}

export default App;
