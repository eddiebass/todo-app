import { BsPlusSquareFill, BsPlusSquare } from "react-icons/bs";

const Create = (props) => {
	return (
		<footer className="border">
			<div className="info">
				<input
					type="text"
					placeholder="Enter Your Task Here"
					value={props.tasks}
					onChange={props.getTask}
				/>
				<BsPlusSquareFill className="add-btn" onClick={props.addTask} />
			</div>
		</footer>
	);
};

export default Create;
