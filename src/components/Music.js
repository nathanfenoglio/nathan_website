import React, { Component } from 'react';
import LiveAtAndys from "../../../public/Harry_at_Andys_Track_01.m4a";

export default class Music extends Component{
	
	render(){
		return(
			<div>
				<h1>Music stuff ok?</h1>
				<p>
					<br/><br/><br/>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/jTS6Jh6uF40" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/5Vk0QhhUjtM" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</p>
			
				<h1>Harry Has a Head Like a Ping Pong Ball</h1>
				<h2>Post Apocalyptic Time Travel Core</h2>
				<li>Guitar: Travis Laminack</li>
				<li>Drums: Dustin Adams</li>
				<li>Bass: Nathan Fenoglio</li>
				<p>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/nUqgGL8950c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/AkpB8N6afDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/QN8Dvm9QMUU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/apTxH9tEXhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
				</p>
				
				<audio ref="audio_tag" src={LiveAtAndys} controls autoPlay/>
			</div>
		)
	}
}