import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends Component{
	render(){
		return(
			<nav className="NavbarItems">
				<h1 className="navbar-logo">React<i className="fab fa-react"></h1>
				<div className="menu-icon">
				
				</div>
				<ul>
					<li key={index}>
						<a className={item.cName} href={item.url}>
							{item.title}
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;