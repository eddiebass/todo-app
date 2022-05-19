import React from "react";
import { BsPlusSquareFill, BsPlusSquare } from "react-icons/bs";

const Create = () => {
	return (
		<footer className="border">
			<div className="info">
				<input type="text" placeholder="Enter Your Task Here" />
				<BsPlusSquareFill className="add-btn" />
			</div>
		</footer>
	);
};

export default Create;
