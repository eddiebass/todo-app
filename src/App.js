import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import List from "./components/List";
import Create from "./components/Create";

function App() {
	return (
		<div className="App">
			<main className="app-head">
				<Header />
				<Nav />
				<List />
				<Create />
			</main>
		</div>
	);
}

export default App;
