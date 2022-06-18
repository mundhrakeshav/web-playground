import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
	const [name, setName] = useLocalStorage("name", "");
	return (
		<div className="App">
			<input
				type="text"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
		</div>
	);
}

export default App;
