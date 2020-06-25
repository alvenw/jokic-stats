import React from 'react';

const Header = () => {
	return (
	    <div className="Header-container">
	    	<PlayerPicture/>
	      <div className="Header-wrapper">
		      <PlayerInfo/>
		  	</div>
	    </div>
	)
}

const PlayerPicture = () => {
	return (
		<img src="./jokic.png" className="Player-picture"/>
	)
}

const PlayerInfo = () => {
	return (
		<div className="Player-info">
				<div className="Player-info-body">
					JOKIC STATS
				</div>
		</div>
	)
}


export default Header;