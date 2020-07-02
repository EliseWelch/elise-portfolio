import React from 'react';
import './Websites.css';
import WebCard from './WebCard';


const Websites = ({ websites }) => {

	return(
		<div className='website-card-list'>
			<h1 className='websites-title'>My Websites</h1>
			<div className='websites'>
				{
				  websites.map((website, i) => {
				  	return (
				  	  <div key={i}>
				  	  <WebCard 
				  	  	image={websites[i].image}
				  	  	name={websites[i].name}
				  	  	stars={websites[i].stars}
				  	  	url={websites[i].url}
				  	  	code={websites[i].code}
				  	  />
				  	  </div>
				  	)
				  })
				}
			</div>	
		</div>
	)
};


export default Websites; 
