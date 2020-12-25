import React, { Component } from 'react';
import LiveAtAndysTrack1 from "../Harry_at_Andys_Track_01.m4a";
import LiveAtAndysTrack2 from "../Harry_at_Andys_Track_02.m4a";
import ParallelRealities_Reflection from "../Reflection.mp3";
import ParallelRealities_GiveMeOneGoodReason from "../Give_Me_One_Good_Reason.mp3";
import ParallelRealities_Heartbeat from "../Heartbeat.mp3";

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
					<br/>
					<h5 style={{color:'red'}}>Skullhead</h5>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/nUqgGL8950c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<h5>Rootbeerrun</h5>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/AkpB8N6afDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<h5>Walter Cronkite Goes Fishin'</h5>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/QN8Dvm9QMUU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<h5>Send in Mcgraw</h5>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/apTxH9tEXhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
				</p>
				
				<h2>Live at Andy's Denton, TX a Long Time Ago</h2>
				<h4>2 Unreleased Tracks: </h4>
				<li>Get That Loot Into the Bag as Reasonably Quick as You Can Let's go Hey</li>
				<li>Stealing Crackers From the Wheat Farm</li>
				<h4>Players:</h4>
				<li>Guitar: Travis Laminack</li>
				<li>Drums: Gabriel Pearson</li>
				<li>Bass: Nathan Fenoglio</li>
				<br/>
				<h5>Get That Loot Into the Bag as Reasonably Quick as You Can Let's go Hey</h5>
				<audio ref="audio_tag" src={LiveAtAndysTrack1} controls />
				<br/>
				<h5>Stealing crackers from the wheat farm</h5>
				<audio ref="audio_tag" src={LiveAtAndysTrack2} controls/>
				
				<h1>Parallel Realities</h1>
				<h2>Self Titled</h2>
				<h4>Players:</h4>
				<li>Vocals: Rocio Herrera</li>
				<li>Drum Set: Garrett Gross</li>
				<li>Auxiliary Percussion: Eric Rogers</li>
				<li>Keys: Sean Pollaro</li>
				<li>Guitar: Chris Belknap</li>
				<li>Bass: Nathan Fenoglio</li>
				<br/>
				<h5>Reflection</h5>
				<audio ref="audio_tag" src={ParallelRealities_Reflection} controls/>
				<h5>Give Me One Good Reason</h5>
				<audio ref="audio_tag" src={ParallelRealities_GiveMeOneGoodReason} controls/>
				<h5>Heartbeat</h5>
				<audio ref="audio_tag" src={ParallelRealities_Heartbeat} controls/>
				
				<h2>Live at Haileys Denton, TX 2005</h2>
				<h4>Players:</h4>
				<li>Vocals: Rocio Herrera</li>
				<li>Drum Set: Garrett Gross</li>
				<li>Auxiliary Percussion: Eric Rogers</li>
				<li>Keys: Sean Pollaro</li>
				<li>Guitar: Chris Belknap</li>
				<li>Bass: Nathan Fenoglio</li>
				<br/><br/>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/Zp5jtLA8D2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				
				
			</div>
		)
	}
}