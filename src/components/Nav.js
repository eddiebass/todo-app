import React from "react";

const Nav = () => {
	return (
		<nav className="border">
			<ul>
				<li>All</li>
				<li>Pending</li>
				<li>Completed</li>
			</ul>
			<button>Clear All</button>
		</nav>
	);
};

export default Nav;
