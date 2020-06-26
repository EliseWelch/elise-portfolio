import React from 'react';
import './WebCard.css';


const WebCard = ({ image, name, stars, url }) => {

	return(
		<div className='web-card'>
			<img src={ image } alt='' />
			<h1>{ name }</h1>
			<p>Customer Satisfaction:</p>
			<p>{ stars }</p>
			<button href={ url } className='card-btn'>Click Here</button>
		</div>
	)
};


export default WebCard; 