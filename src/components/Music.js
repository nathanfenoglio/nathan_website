import React, { Component } from 'react';
import LiveAtAndysTrack1 from "../Harry_at_Andys_Track_01.m4a";
import LiveAtAndysTrack2 from "../Harry_at_Andys_Track_02.m4a";

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
				
				<h2>Live at Andy's Denton, TX a Long Time Ago</h2>
				<h4>2 Unreleased Tracks: </h4>
				<li>Get that loot as reasonably fast as you can, let's go, hey?</li>
				<li>Stealing crackers from the wheat farm</li>
				<h4>Players:</h4>
				<li>Guitar: Travis Laminack</li>
				<li>Drums: Gabriel Pearson</li>
				<li>Bass: Nathan Fenoglio</li>
				<br/>
				<h5>Get that loot as reasonably fast as you can, let's go, hey?</h5>
				<audio ref="audio_tag" src={LiveAtAndysTrack1} controls autoPlay{false}/>
				<br/>
				<h5>Stealing crackers from the wheat farm</h5>
				<audio ref="audio_tag" src={LiveAtAndysTrack2} controls autoPlay/>
			</div>
		)
	}
}