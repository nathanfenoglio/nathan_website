import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
		<Navbar />
      <header className="App-header">
		<p>
			<br/><br/><br/>
		  <iframe width="560" height="315" src="https://www.youtube.com/embed/jTS6Jh6uF40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/5Vk0QhhUjtM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</p>
        <a>Flamm</a>
      </header>
    </div>
  );
}

export default App;
