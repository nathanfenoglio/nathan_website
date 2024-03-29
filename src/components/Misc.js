import React, { Component } from 'react';
import './Misc.css';

export default class Misc extends Component{
	render(){
		return(
			<div className="misc-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Misc</h1>
				<div>
					<p className="comments">check out code on github</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio">GitHub</a>
					<br/><br/><br/><br/>
				</div>
				<div>
					<p className="comments">check out youtube channel</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCu2L2DwJfQsSkZdv3GtGwzQ/videos">YouTube</a>
					<br/>
				</div>
				<div>
					<p className="comments" style={{ marginTop: "5%" }}>Contact Me</p>
					<p className='links' style={{marginTop: "5%"}}>nathanrfenoglio@gmail.com</p>
	                <a className="links" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/nathan-fenoglio-b0a148a2">Linked In</a>
    	            <br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nathan.fenoglio">Facebook</a>
				</div>
			</div>
		)
	}
}