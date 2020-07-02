import React from 'react';
import './WebCard.css';


const WebCard = ({ image, name, stars, url, code }) => {

	return(
		<div className='web-card'>
			<div className='img-btns'>
				<img src={ image } alt='' />
				<div className='overlay-btns'>
					<a href={ image } className='explore-btn'><button>Explore</button></a>
					<a href={ url } target="_blank" rel="noopener noreferrer"><button className='url-btn'>Website</button></a>
					<a href={ code } target="_blank" rel="noopener noreferrer"><button className='code-btn'>Code</button></a>
				</div>
			</div>
			<div className='info'>
				<h1>{ name }</h1>
				<h2>Customer Satisfaction:</h2>
				<p>{ stars }</p>
			</div>
		</div>
	)
};


export default WebCard; 
