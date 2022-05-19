import React from "react";
import { BsCheckSquareFill, BsCheckSquare, BsThreeDots } from "react-icons/bs";

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
				<BsThreeDots className="dots" />
			</article>
			<article className="border">
				<section>
					<div className="tick-box">
						<BsCheckSquareFill className="tick" />
					</div>
					<p>Renewing my broadband subscription</p>
				</section>
				<BsThreeDots className="dots" />
			</article>
		</div>
	);
};

export default List;
