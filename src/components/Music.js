import React, { Component } from 'react';
import './Music.css';
import LiveAtAndysTrack1 from "../Harry_at_Andys_Track_01.m4a";
import LiveAtAndysTrack2 from "../Harry_at_Andys_Track_02.m4a";
import ParallelRealities_Reflection from "../Reflection.mp3";
import ParallelRealities_GiveMeOneGoodReason from "../Give_Me_One_Good_Reason.mp3";
import ParallelRealities_Heartbeat from "../Heartbeat.mp3";

export default class Music extends Component{
	
	render(){
		return(
			<div className="music-container-1">
				<h1 style={{color: 'white', fontSize:200}}>Musical Pursuits</h1>
				<br/><br/><br/>
				<h1 style={{color: 'red', fontSize:100}}>Solo Electronic Music</h1>
				<p>
					<br/>
					<h3 style={{color: 'yellow'}}>Time to Travel, Face It</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/jTS6Jh6uF40" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/><br/><br/>
					<h3 style={{color: 'yellow'}}>This Is It</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/5Vk0QhhUjtM" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/><br/><br/>
					<h3 style={{color: 'yellow'}}>A Lightbulb Attached to His Head Lights Up</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/q8iOnHRrHpk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/><br/><br/>
					<h3 style={{color: 'yellow'}}>Let's Have a Look In Here Why Don't We</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/eKb4dW4DtT4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/><br/><br/>
					<h3 style={{color: 'yellow'}}>Rubiks Cuban</h3>
					<iframe
					   frameborder="0"
					   width="500"
					   height="100"
					   src="https://drive.google.com/file/d/15CwM3d4vTSsdbxBjLVnU_ZIdm0irdMwN/preview?usp=sharing">
					</iframe>
					<br/><br/><br/>
				</p>
			
				<h1 style={{color: 'red', fontSize:100}}>Harry Has a Head Like a Ping Pong Ball</h1>
				<h2 style={{color: 'fuchsia', fontSize:75}}>Post Apocalyptic Time Travel Core</h2>
				<li style={{color: 'yellow', fontSize: 60}}>Guitar: Travis Laminack</li>
				<li style={{color: 'yellow', fontSize: 60}}>Drums: Dustin Adams</li>
				<li style={{color: 'yellow', fontSize: 60}}>Bass: Nathan Fenoglio</li>
				<p>
					<br/>
					<h3 style={{color:'yellow'}}>Skullhead</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/nUqgGL8950c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<h3 style={{color: 'yellow'}}>Rootbeerrun</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/AkpB8N6afDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<h3 style={{color: 'yellow'}}>Walter Cronkite Goes Fishin'</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/QN8Dvm9QMUU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
					<h3 style={{color: 'yellow'}}>Send in Mcgraw</h3>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/apTxH9tEXhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<br/>
				</p>
				
				<h2 style={{color: 'fuchsia', fontSize:75}}>Live at Andy's Denton, TX a Long Time Ago</h2>
				<h4 style={{color: 'white'}}>2 Unreleased Tracks: </h4>
				<li style={{color: 'white'}}>Get That Loot Into the Bag as Reasonably Quick as You Can Let's go Hey</li>
				<li style={{color: 'white'}}>Stealing Crackers From the Wheat Farm</li>
				<h4 style={{color: 'yellow', fontSize: 60}}>Players:</h4>
				<li style={{color: 'yellow', fontSize: 60}}>Guitar: Travis Laminack</li>
				<li style={{color: 'yellow', fontSize: 60}}>Drums: Gabriel Pearson</li>
				<li style={{color: 'yellow', fontSize: 60}}>Bass: Nathan Fenoglio</li>
				<br/>
				<h3 style={{color: 'yellow'}}>Get That Loot Into the Bag as Reasonably Quick as You Can Let's go Hey</h3>
				<audio ref="audio_tag" src={LiveAtAndysTrack1} controls />
				<br/>
				<h3 style={{color: 'yellow'}}>Stealing crackers from the wheat farm</h3>
				<audio ref="audio_tag" src={LiveAtAndysTrack2} controls/>
				
				<h1 style={{color: 'red', fontSize:150}}>Parallel Realities</h1>
				<h2 style={{color: 'fuchsia', fontSize:75}}>Self Titled</h2>
				<h4 style={{color: 'yellow', fontSize: 60}}>Players:</h4>
				<li style={{color: 'yellow', fontSize: 60}}>Vocals: Rocio Herrera</li>
				<li style={{color: 'yellow', fontSize: 60}}>Drum Set: Garrett Gross</li>
				<li style={{color: 'yellow', fontSize: 60}}>Auxiliary Percussion: Eric Rogers</li>
				<li style={{color: 'yellow', fontSize: 60}}>Keys: Sean Pollaro</li>
				<li style={{color: 'yellow', fontSize: 60}}>Guitar: Chris Belknap</li>
				<li style={{color: 'yellow', fontSize: 60}}>Bass: Nathan Fenoglio</li>
				<br/><br/>
				<h3 style={{color: 'yellow'}}>Reflection</h3>
				<audio ref="audio_tag" src={ParallelRealities_Reflection} controls/>
				<br/><br/>
				<h3 style={{color: 'yellow'}}>Give Me One Good Reason</h3>
				<audio ref="audio_tag" src={ParallelRealities_GiveMeOneGoodReason} controls/>
				<br/><br/>
				<h3 style={{color: 'yellow'}}>Heartbeat</h3>
				<audio ref="audio_tag" src={ParallelRealities_Heartbeat} controls/>
				<br/><br/>
				
				<h2 style={{color: 'fuchsia', fontSize:75}}>Live at Haileys Denton, TX 2005</h2>
				<h4 style={{color: 'yellow', fontSize: 60}}>Players:</h4>
				<li style={{color: 'yellow', fontSize: 60}}>Vocals: Rocio Herrera</li>
				<li style={{color: 'yellow', fontSize: 60}}>Drum Set: Garrett Gross</li>
				<li style={{color: 'yellow', fontSize: 60}}>Auxiliary Percussion: Eric Rogers</li>
				<li style={{color: 'yellow', fontSize: 60}}>Keys: Sean Pollaro</li>
				<li style={{color: 'yellow', fontSize: 60}}>Guitar: Chris Belknap</li>
				<li style={{color: 'yellow', fontSize: 60}}>Bass: Nathan Fenoglio</li>
				<br/><br/>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/Zp5jtLA8D2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				
				<br/><br/><br/><br/>
				<h1 style={{color: 'red', fontSize:140}}> Wrought of Obsidian</h1>
			</div>
		)
	}
}