import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import List from "./components/List";
import { BsCheckSquareFill, BsCheckSquare, BsThreeDots } from "react-icons/bs";
import Create from "./components/Create";

function App() {
	let count = 0;
	const [taskArray, setTaskArray] = useState([]);
	const [tasks, setTasks] = useState("");
	// const [taskArray, setTaskArray] = useState([]);
	const getTask = (e) => {
		setTasks(e.target.value);
	};
	const addTask = () => {
		setTaskArray((prev) => [tasks, ...prev]);
	};
	const clearAll = () => {
		setTaskArray([]);
	};
	const allTasks = taskArray.map((task) => {
		let myTasks;
		if (task.length > 0) {
			count += 1;
			myTasks = (
				<article className="border">
					<section>
						<div className="tick-box">
							<BsCheckSquare className="tick" />
						</div>
						<p>{task}</p>
					</section>
					<BsThreeDots className="dots" />
				</article>
			);
		}
		return myTasks;
	});

	return (
		<div className="App">
			<main className="app-head">
				<Header count={count} />
				<Nav clearAll={clearAll} />
				{count > 0 ? (
					<div className="overflow">{allTasks}</div>
				) : (
					<p className="hero">What do you plan for today?</p>
				)}
				{/* <List taskArray={taskArray} tasks={tasks} /> */}
				<Create getTask={getTask} addTask={addTask} />
			</main>
		</div>
	);
}

export default App;
