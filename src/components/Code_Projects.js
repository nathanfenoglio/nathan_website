import React, { Component } from 'react';
import './Code_Projects.css';
import graph_traversal_sequencer_image from "../images/GraphTraversalSequencerImage.jpg";
import graph_traversal_sequencer_instructions_image from "../images/GraphTraversalSequencerInstructionsImage.jpg";
import take_2_sequences_and_do_a_bunch_of_stuff_image from "../images/Take2SequencesAndDoABunchOfStuffImage.jpg";


export default class Code_Projects extends Component{
	render(){
		return(
			<div className="code-projects-container">
				{window.scrollTo(0, 0)}
				<h1 className="page-title">Code Projects</h1>
				<div style={{ backgroundColor: "black", paddingTop: "2vw", paddingBottom: "5vw" }}>
					<p className="directions">Graph Traversal Sequencer</p>
					<p className="comments">Desktop application for drawing graphs and generating midi note sequences</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://app.box.com/s/xfcio6glciu63e0uqhwhqmjvi1tb092r">Follow Link to Download for Windows</a>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio/Graph-Traversal-Sequencer">Check out code on GitHub</a>

					<img className="app-static-image" src={graph_traversal_sequencer_image}/>	
					<p style={{marginLeft: '20'}}>How To Use</p>
					<img className="app-static-image" src={graph_traversal_sequencer_instructions_image}/>	
					<br/>
					<br/>
					<p className="directions">Take 2 Sequences And Do A Bunch Of Stuff</p>
					<p className="comments">wxWidgets form that takes 2 sequences and allows user to perform all sorts of operations on them to generate music sequences</p>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://app.box.com/s/xfcio6glciu63e0uqhwhqmjvi1tb092r">Follow Link to Download for Windows</a>
					<br/>
					<a className="links" target="_blank" rel="noopener noreferrer" href="https://github.com/nathanfenoglio/wxWidgetsSequencingApp">Check out code on GitHub</a>
					<img className="app-static-image" style={{ paddingBottom: "2vw" }} src={take_2_sequences_and_do_a_bunch_of_stuff_image}/>	
					<p className="smaller-directions">Operations:</p>
					<p className="smaller-directions">Mod By Add By - mod each # in sequence by "mod by" value then add "add by" value</p>
					<p className="smaller-directions">Add By Mod By - add each # in sequence by "add by" value then mod by "mod by" value</p>
					<p className="smaller-directions">Rotate Left - rotates the sequence to the left with the leftest # wrapping around to the rightest most index</p>
					<p className="smaller-directions">Rotate Right - rotates the sequence to the right with the rightest # wrapping around to the first index</p>
					<p className="smaller-directions">Reverse - reverses sequence</p>
					<p className="smaller-directions">Sum Inversion - inverts each # in sequence, for instance if # is 3 and "sum inversion #" is 10 then new # will be 10 - 3 = 7</p>
					<p className="smaller-directions">Tower of Hanoi it - takes the 1st "# discs t_o_h" # of digits in sequence, maps them to discs, and executes tower of hanoi discs on poles algorithm</p>
					<p className="smaller-directions">generating sequence by starting from bottom of poles going left to right on poles for each move until solved</p>
					<p className="smaller-directions">apply replacement - replace a substring in whichever sequence with another substring</p>
					<p className="smaller-directions">splice sequences - takes 1 element from 1 sequence and then 1 element from the other sequence repeatedly until both sequences are interleaved</p>
					<p className="smaller-directions">multiply sequences by scalars add together mod by - multiplies each sequence by respective specified scalar, adds sequences together, then mods by "mod by" value</p>
					<p className="smaller-directions"></p>
					<p className="smaller-directions"></p>
					<p className="smaller-directions"></p>
					<p className="smaller-directions"></p>

					<br/>

				</div>

			</div>
		)
	}
}