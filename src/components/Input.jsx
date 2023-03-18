import { useInput } from "../hooks/useInput";

const Input = () => {
	const username = useInput("");
	const password = useInput("");

	return (
		<div>
			<input type="text" placeholder="Username" {...username} />
			<input type="password" placeholder="Password" {...password} />
			<button onClick={() => console.log(username.value, password.value)}>
				Click
			</button>
		</div>
	);
};

export default Input;
