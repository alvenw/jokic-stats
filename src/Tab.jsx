import React, { useState } from "react";
import {NavLink} from 'react-router-dom';

const Tab = (props) => {
	const [tabName, setName] = useState(props.name);
	const [isSelected, setIsSelected] = useState(false);

	return (
		<NavLink exact to={props.path} className="Tab">
			{tabName}
		</NavLink>
	);
}

export default Tab;