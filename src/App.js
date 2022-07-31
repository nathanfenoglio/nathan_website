import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import Carousel from "react-bootstrap/Carousel";

import Music from "./components/Music";
import Video_Games from "./components/Video_Games";
import Cubeland_Solution_Path from "./components/Cubeland_Solution_Path";
import Code_Projects from "./components/Code_Projects";
import Web_Apps from "./components/Web_Apps";
import Misc from "./components/Misc";

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
				</div>
			</Router>
		  );
	}
}

export default App;
