import React from 'react';
import './Intro.css';
import profile from '../elise.jpg';


const Intro = () => {

	return(
		<div className='intro'>
			<img className='profile' alt='' src={ profile } />
			<h2 className='greeting'>Hi, I Am Elise!</h2>
			<p className='description'>I am a frontend web developer.</p>
		</div>
	)
};


export default Intro; 
