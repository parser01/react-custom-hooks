import axios from "axios";
import { useCallback } from "react";
import { useRequest } from "../hooks/useRequest";

const Request = () => {
	console.log("render Request");
	/* 	const [todos, setTodos] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(""); */

	const fetchTodos = useCallback(() => {
		return axios.get("https://jsonplaceholder.typicode.com/todos");
	}, []);

	const [todos, isLoading, error] = useRequest(fetchTodos);

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	setTimeout(() => {
	// 		fetchTodos()
	// 			.then((res) => {
	// 				console.log("setTodos");
	// 				setTodos(res.data);
	/* 					setTimeout(() => {
						console.log("setTimeout");
						setTodos(res.data);
					}, 5000); */
	// })
	/* 				.then(() => {
					console.log("setIsLoadinggg");
					setIsLoading(false);
				}); */
	// 			.catch((error) => {
	// 				console.log("setError");
	// 				setError(error);
	// 			})
	// 			.finally(() => {
	// 				console.log("setIsLoading");
	// 				setIsLoading(false);
	// 			});
	// 	}, 5000);
	// }, []);

	if (isLoading) {
		return <div>Loading todos...</div>;
	}

	if (error) {
		return <div>Oops! Error occured</div>;
	}

	return (
		<div>
			{todos &&
				todos.map((todo) => (
					<div key={todo.id}>
						{todo.id}. {todo.title}
					</div>
				))}
		</div>
	);
};

export default Request;
