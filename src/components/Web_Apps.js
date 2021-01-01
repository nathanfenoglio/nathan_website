import React, { Component } from 'react';
import './Web_Apps.css';

export default class Web_Apps extends Component{
	render(){
		return(
			<div className="web-apps-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Web Apps</h1>
			</div>
		)
	}
}