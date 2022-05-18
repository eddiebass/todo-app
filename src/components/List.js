import React from "react";
import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";

const List = () => {
	return (
		<div>
			<article className="border">
				<section>
					<div className="tick-box">
						<BsCheckSquareFill className="tick" />
					</div>
					<p>Going to the Park with Anne</p>
				</section>
				<h3>...</h3>
			</article>
			<article className="border">
				<section>
					<div className="tick-box">
						<BsCheckSquareFill className="tick" />
					</div>
					<p>Renewing my broadband subscription</p>
				</section>
				<h3>...</h3>
			</article>
		</div>
	);
};

export default List;
