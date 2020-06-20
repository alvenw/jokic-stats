import React, { useState } from "react";

const Tab = (props) => {
	const [tabName, setName] = useState(props.name);
	const [isSelected, setIsSelected] = useState(false);

	return (
		<div className="Tab">
			<div className="Tab-wrapper">
				{tabName}
			</div>
		</div>
	);
}

export default Tab;