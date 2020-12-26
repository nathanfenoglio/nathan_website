import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Carousel from "react-bootstrap/Carousel";

import Music from "./components/Music";
import Video_Games from "./components/Video_Games";
import Cubeland_Solution_Path from "./components/Cubeland_Solution_Path";
import Code_Projects from "./components/Code_Projects";
import Web_Apps from "./components/Web_Apps";
import Misc from "./components/Misc";

import image_1 from "./images/green.jpg";
import image_2 from "./images/yellow.jpg";
import image_3 from "./images/red.jpg";
import image_4 from "./images/blue.jpg";
import image_5 from "./images/orange.jpg";
import image_6 from "./images/white.jpg";


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
						<Carousel interval={1000}>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={image_1}
									alt=""
									style={{ height: "100vh"}}
								/>
								<Carousel.Caption>
									<h3>First Slide Label</h3>
									<p>Scenery 1</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={image_2}
									alt=""
									style={{ height: "100vh" }}
								/>
								<Carousel.Caption>
									<h3>Second Slide Label</h3>
									<p>Scenery 2</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={image_3}
									alt=""
									style={{ height: "100vh" }}
								/>
								<Carousel.Caption>
									<h3>Third Slide Label</h3>
									<p>Scenery 3</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={image_4}
									alt=""
									style={{ height: "100vh" }}
								/>
								<Carousel.Caption>
									<h3>Fourth Slide Label</h3>
									<p>Scenery 4</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={image_5}
									alt=""
									style={{ height: "100vh" }}
								/>
								<Carousel.Caption>
									<h3>Fifth Slide Label</h3>
									<p>Scenery 5</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={image_6}
									alt=""
									style={{ height: "100vh" }}
								/>
								<Carousel.Caption>
									<h3>Sixth Slide Label</h3>
									<p>Scenery 6</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					
				</div>
			</Router>
		  );
	}
}

export default App;
