import "./App.css";

// import { useState } from "react";
// import { useRef } from "react";
// import Hover from "./components/Hover";
// import Input from "./components/Input";
// import Debounce from "./components/Debounce";
// import Scroll from "./components/Scroll";
// import Request from "./components/Request";
import Validation from "../Validation/Validation";
// import { useHover } from "./hooks/useHover";
// import { useInput } from "./hooks/useInput";

function App() {
	// const [value, setValue] = useState("");

	/* 	const onChange = (event) => {
		setValue(event.target.value);
	}; */

	/* 	const username = useInput("");
	const password = useInput(""); */

	// const ref = useRef();
	// const isHovering = useHover(ref);

	// console.log(ref);

	console.log("render App");
	// console.log(isHovering);

	return (
		<div className="app">
			{/* 			<input type="text" placeholder="Username" {...username} />
			<input type="text" placeholder="Password" {...password} />
			<button onClick={() => console.log(username.value, password.value)}>
				Click
			</button> */}
			{/* <input type="text" value={value} onChange={onChange} /> */}
			{/* <button onClick={() => console.log(value)}>Click</button> */}
			{/* 			<div
				style={{
					width: 300,
					height: 300,
					background: isHovering ? "red" : "blue",
				}}
				ref={ref}
			></div> */}
			{/* <Input /> */}
			{/* <Hover /> */}
			{/* <Scroll /> */}
			{/* <Debounce /> */}
			{/* <Request /> */}
			<Validation />
		</div>
	);
}

export default App;
