import React from 'react';
import './Websites.css';
import WebCard from './WebCard';


const Websites = ({ websites }) => {

	return(
		<div className='website-card-list'>
			{
			  websites.map((website, i) => {
			  	return (
			  	  <div key={i}>
			  	  <WebCard 
			  	  	image={websites[i].image}
			  	  	name={websites[i].name}
			  	  	stars={websites[i].stars}
			  	  	url={websites[i].url}
			  	  />
			  	  </div>
			  	)
			  })
			}
		</div>
	)
};


export default Websites; 
