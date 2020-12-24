import React, { Component } from 'react';

export default class Music extends Component{
	
	render(){
		return(
			<div>
				<h1>Music stuff ok?</h1>
				<p>
					<br/><br/><br/>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/jTS6Jh6uF40" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/5Vk0QhhUjtM" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</p>
			</div>
		)
	}
}