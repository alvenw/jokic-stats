import React from 'react';
import Tab from './Tab';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className="NavBar">
				<div className="NavBar-Container">
					<Tab name={"Overview"}></Tab>
					<Tab name={"Recent Games"}></Tab>
					<Tab name={"Career Stats"}></Tab>
				</div>
			</div>
		</React.Fragment>
	)
}

export default NavBar