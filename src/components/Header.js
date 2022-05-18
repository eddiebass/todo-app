import React from "react";

const Header = () => {
	const date = new Date();
	const theDate = date.getDate();
	const month = () => {
		const options = { month: "long" };
		return new Intl.DateTimeFormat("en-US", options).format(date);
	};
	const day = () => {
		const options = { weekday: "long" };
		return new Intl.DateTimeFormat("en-US", options).format(date);
	};
	return (
		<header className="border">
			<div className="head-list">
				<h1>
					{`${day()}, ${theDate}`}
					<sup>th</sup>
				</h1>
				<h2>0 Task</h2>
			</div>
			<p className="month">{month()}</p>
		</header>
	);
};

export default Header;
