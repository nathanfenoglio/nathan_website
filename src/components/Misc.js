import React, { Component } from 'react';
import './Misc.css';

export default class Misc extends Component{
	render(){
		return(
			<div className="misc-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Misc</h1>
			</div>
		)
	}
}