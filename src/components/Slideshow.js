import React, { Component } from 'react';
import { Slide } from "react-slideshow-image";

const slideImages = [
	'images/My_Face_186.PNG',
	'images/My_Face_187.PNG',
	'images/My_Face_186.PNG'
];

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

export default class Slideshow extends Component{
	render(){
		return (
			<div className="slide-container">
				<Slide {...properties}>
					<div className="each-slide">
						<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
							<span>Slide 1</span>
						</div>
					</div>
					<div className="each-slide">
						<div style={{'backgroundImage': `url(${slideImages[1]})`}}>
							<span>Slide 2</span>
						</div>
					</div>
					<div className="each-slide">
						<div style={{'backgroundImage': `url(${slideImages[2]})`}}>
							<span>Slide 3</span>
						</div>
					</div>
				</Slide>
			</div>
		)
	}
}