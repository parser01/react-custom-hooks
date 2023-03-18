import React, { useRef, useState } from "react";
import { useScroll } from "../hooks/useScroll";

const Scroll = () => {
	console.log("list");
	const [todos, setTodos] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(null);

	const limit = 20;

	const ancestorRef = useRef(null);
	const descendantRef = useRef(null);

	const fetchTodos = () => {
		// console.log("appeared");

		debugger;
		if (todos.length === totalCount) {
			return;
		}

		fetch(
			`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${currentPage}`
		)
			.then((res) => {
				console.log("res");
				return res.json().then((json) => {
					console.log("json");
					console.log(res.headers);
					return { headers: res.headers, json };
				});
			})
			.then(({ headers, json }) => {
				console.log("headers json");
				console.log(headers);
				setTodos([...todos, ...json]);
				setCurrentPage((actual) => actual + 1);
				setTotalCount(+headers.get("x-total-count"));
			});
	};

	useScroll(ancestorRef, descendantRef, fetchTodos);

	return (
		<div
			ref={ancestorRef}
			style={{ width: 800, height: "80vh", overflow: "auto" }}
		>
			{todos.map((todo) => (
				<div
					key={todo.id}
					style={{ padding: 20, borderBottom: "1px solid black" }}
				>
					{todo.id}. {todo.title}
				</div>
			))}
			<div
				ref={descendantRef}
				style={{ height: 10, background: "blue" }}
			></div>
		</div>
	);
};

export default Scroll;
