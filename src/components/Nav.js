import React from "react";

const Nav = (props) => {
	return (
		<nav className="border">
			<ul>
				<li>All</li>
				<li>Pending</li>
				<li>Completed</li>
			</ul>
			<button onClick={props.clearAll}>Clear All</button>
		</nav>
	);
};

export default Nav;
