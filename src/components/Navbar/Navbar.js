import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button"
import './Navbar.css';

class Navbar extends Component{
	state = { clicked: false}
	
	handleClick = () => {
		this.setState({clicked: !this.state.clicked})
	}
	
	render(){
		return(
			<nav className="NavbarItems">
				<h1 className="navbar-logo">Flimm<i className="fab fa-react"></i></h1>
				<div className="menu-icon" onClick={this.handleClick}>
					<i id="i-tag" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
					{MenuItems.map((item, index) =>{
						return(
							<li key={index}>
								{/*
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
								*/}
								{/*<Link to={item.url} className={item.cName}>{item.title}</Link>*/}
								<NavLink to={item.url} className={item.cName} exact activeStyle={{color:'pink'}} onClick={this.handleClick; i-tag.className='fas fa-bars'}>{item.title}</NavLink>
							</li>
						)
					})}
					
				</ul>
				<Button>Contact</Button>
			</nav>
		)
	}
}

export default Navbar;