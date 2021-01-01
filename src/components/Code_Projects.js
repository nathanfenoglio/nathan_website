import React, { Component } from 'react';
import './Code_Projects.css';

export default class Code_Projects extends Component{
	render(){
		return(
			<div className="code-projects-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Code Projects</h1>
			</div>
		)
	}
}