import React from 'react';
import './Header.css';
import insta from '../icons/insta.png';
import github from '../icons/github.png';


const Header = () => {

	return (
		<div className='header'>
			<a className='insta' href="https://www.instagram.com/sitesbyelise/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="insta" /></a>
			<p className='logo'>Elise Welch</p>
			<a className='github' href="https://github.com/EliseWelch" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
		</div>
	)
};

export default Header;

