import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ParallelRealities_Reflection from "../Reflection.mp3";
import wooLogo from "../images/WOO_logo.png";
import coasi_album_cover from "../images/ChildrenOfAShatteredInfinityCover.jpg";
import './Music.css';

export default class Music extends Component{
	
	render(){
		return(
			<div className="music-container-1">
				{window.scrollTo(0, 0)}
				<br/><br/><br/>
				<h1 className="page-title">Musical Pursuits</h1>
				<br/><br/><br/>

				<div style={{ backgroundColor: "cyan", width: "auto", marginBottom: "5vw", paddingTop: "5vw"}}>
					<h1 className="band">Solo Electronic Music</h1>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/flimmflamm23">Listen on Soundcloud</a>
					<br/>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCu2L2DwJfQsSkZdv3GtGwzQ/videos?view=0&sort=p">YouTube Channel</a>

					<br/>
					<p className="music-box">
						<div className='one-song'>
							<h3 className="song-title">Time to Travel, Face It</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/jTS6Jh6uF40" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">This Is It</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/5Vk0QhhUjtM" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">A Lightbulb Attached to His Head Lights Up</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/q8iOnHRrHpk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Let's Have a Look In Here Why Don't We</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/eKb4dW4DtT4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Steppin' Into Tomorrow</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/99sKxIIpdBI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>						
						</div>
						<div className='one-song'>
							<h3 className="song-title">Detour Through Here</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/M-Y47CxSYvA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Is everyone ready to go? We're out of time</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/34Gtb-B8H8Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">ELF</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/5MPArWYvhSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Eye Eye Eye</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/LN3_ks_yqj4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Mutating Jerk (the rate of change of acceleration with time)</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/gzTUQMyjCyc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Knot What You Would Expect Then Enter The World</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/t3zKP68Lsxk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Lady Day</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/r14f9LdvYB4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Fimfasylm</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/z8eE-f5Adak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Jewels Strung On An As Yet Invisible Thread</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/-S55T582KQI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Waving While Performing the Ol' In-Out</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/uHHFL4B9X9k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Vexed</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/12a4xSNXZtA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Rubiks Cuban</h3>
							<iframe className="audio-link"
								src="https://drive.google.com/file/d/15CwM3d4vTSsdbxBjLVnU_ZIdm0irdMwN/preview?usp=sharing">
							</iframe>
							<br/><br/>
						</div>
					</p>
				</div>

				<div style={{ backgroundColor: "limegreen", width: "auto", marginBottom: "5vw", paddingBottom: "5vw", paddingTop: "5vw"}}>
					<div>
					<h1 className="band">Harry Has a Head Like a Ping Pong Ball</h1>
					<h2 className="album-title">Post Apocalyptic Time Travel Core</h2>
					<ul className="players">
						<li>Guitar: Travis Laminack</li>
						<li>Drums: Dustin Adams</li>
						<li>Bass: Nathan Fenoglio</li>
					</ul>
					</div>
					<p className='music-box'>
						<div className='one-song'>
							<h3 className="song-title">Skullhead</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/nUqgGL8950c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Rootbeerrun</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/AkpB8N6afDw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Walter Cronkite Goes Fishin'</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/QN8Dvm9QMUU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Send in Mcgraw</h3>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/apTxH9tEXhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</p>
					<h2 className="album-title">Live at Andy's Denton, TX a Long Time Ago</h2>
					<h4 className="players" style={{color: "white"}}>2 Unreleased Tracks: </h4>
					<li className="players" style={{color: "white"}}>Get That Loot Into the Bag as Reasonably Quick as You Can Let's go Hey</li>
					<li className="players" style={{color: "white"}}>Stealing Crackers From the Wheat Farm</li>
					<ul className="players">
						<li>Guitar: Travis Laminack</li>
						<li>Drums: Gabriel Pearson</li>
						<li>Bass: Nathan Fenoglio</li>
					</ul>
					<br/>
					<p className='music-box'>
						<div className='one-song'>
							<h3 className="song-title">Get That Loot Into the Bag as Reasonably Quick as You Can Let's go Hey</h3>
							<ReactPlayer
								width='40%' 
								height='40%'
								url="https://soundcloud.com/flimmflamm23/get-that-loot-into-the-bag-as-reasonably-quick-as-you-can-lets-go-hey"
								className='react-player'					
							/>					
						</div>
						<div className='one-song'>
							<h3 className="song-title">Stealing crackers from the wheat farm</h3>
							<ReactPlayer
								width='40%' 
								height='40%'
								url="https://soundcloud.com/flimmflamm23/stealing-crackers-from-the-wheat-farm"
								className='react-player'					
							/>						
						</div>				
					</p>
				</div>

				<div style={{ backgroundColor: "peru", width: "auto", marginBottom: "5vw", paddingTop: "5vw"}}>
					<h1 className="band" style={{fontSize: "8vw"}}>Parallel Realities</h1>
					<h2 className="album-title">Self Titled</h2>
					<ul className="players">
						<li>Vocals: Rocio Herrera</li>
						<li>Drum Set: Garrett Gross</li>
						<li>Auxiliary Percussion: Eric Rogers</li>
						<li>Keys: Sean Pollaro</li>
						<li>Guitar: Chris Belknap</li>
						<li>Bass: Nathan Fenoglio</li>
					</ul>
					<p className='music-box'>
						<div className='one-song'>
							<h3 className="song-title">Reflection</h3>
							<audio style={{ marginBottom: "15%", marginTop: "15%", width: "75%" }} ref="audio_tag" src={ParallelRealities_Reflection} controls/>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Give Me One Good Reason</h3>
							<ReactPlayer
								width='50%' 
								height='50%'
								url="https://soundcloud.com/dutchangles/01-one-good-reason"
								className='react-player'					
							/>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Heartbeat</h3>
							<ReactPlayer
								width='50%' 
								height='50%'
								url="https://soundcloud.com/dutchangles/02-heartbeat"
								className='react-player'					
							/>
						</div>
						<div className='one-song'>
							<h3 className="song-title">Neil Diamond</h3>
							<ReactPlayer
								width='50%' 
								height='50%'
								url="https://soundcloud.com/dutchangles/04-neil-diamond"
								className='react-player'					
							/>
						</div>
					</p>
					<h2 className="album-title">Live at Haileys Denton, TX 2005</h2>
					<ul className="players">
						<li>Vocals: Rocio Herrera</li>
						<li>Drum Set: Garrett Gross</li>
						<li>Auxiliary Percussion: Eric Rogers</li>
						<li>Keys: Sean Pollaro</li>
						<li>Guitar: Chris Belknap</li>
						<li>Bass: Nathan Fenoglio</li>
					</ul>
					<br/><br/>
					<div className='one-song'>
						<iframe className="youtube-link" src="https://www.youtube.com/embed/Zp5jtLA8D2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
					<br/><br/><br/><br/>
				</div>

				<div style={{ backgroundColor: "black", width: "auto", marginBottom: "5vw", paddingTop: "5vw"}}>
					<img className="woo-logo" src={wooLogo}></img>
					<br/>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/wroughtofobsidian/">Facebook</a>
					<br/><br/><br/>
					<h2 className="album-title">Children of a Shattered Infinity</h2>
					<img style={{ width: "37.5vw", width: "37.5vw" }} src={coasi_album_cover}></img>
					<p className="directions" style={{ fontSize: "6vw" }}>Click a link to listen to album</p>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://wroughtofobsidian.bandcamp.com/album/children-of-a-shattered-infinity">Listen on bandcamp</a>
					<br/>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/album/6Be7lXxBNAstVgzhiT42TL?si=RMauNV7VTMW0sQ57VdWTDQ">Listen on Spotify</a>
					<br/>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/playlist?list=OLAK5uy_kqzjx5Noxy7umwbnLDkrYvGhfBoo_4zdI">Listen on YouTube</a>
					<br/><br/>
					<div className='one-song'>
						<h2 className="album-title" style={{ marginTop: "10vw" }}>At Long Last</h2>
						<iframe className="youtube-link" src="https://www.youtube.com/embed/2APEz7dNrDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
					<br/><br/>

					<p className="directions" style={{ fontSize: "6vw" }}>Purchase Merch</p>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://wroughtofobsidian.dizzyjam.com/">Buy Stuff</a>
					<br/><br/>
					<a className="gen-link" target="_blank" rel="noopener noreferrer" href="https://wroughtofobsidian.bigcartel.com/">Buy Stuff</a>
					<br/><br/><br/><br/>

					<h2 className="album-title">Video</h2>
					<p className='music-box'>
						<div className='one-song'>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/koSfXwUaQ5U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/gLxrwo5T2Oo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/ak2m4rUP_e0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/2RsH7-qshh0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
						<div className='one-song'>
							<h2 className="album-title">Playthrough Videos</h2>
							<iframe className="youtube-link" src="https://www.youtube.com/embed/3vUzfJl8VBw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</p>
				</div>
			</div>
		)
	}
}