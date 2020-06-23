import React from 'react';
import Tab from './Tab';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className="NavBar">
				<div className="NavBar-Container">
					<Tab path="/" name="Overview"></Tab>
					<Tab path="log" name="Game Log"></Tab>
					<Tab path="averages" name="Career Stats"></Tab>
				</div>
			</div>
		</React.Fragment>
	)
}

export default NavBar