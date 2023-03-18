import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const Debounce = () => {
	const [value, setValue] = useState("");

	const debounceSearch = useDebounce(search, 3000);

	const onChange = (e) => {
		setValue(e.target.value);
		debounceSearch(e.target.value);
	};

	function search(query) {
		fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}

	return (
		<div>
			<input type="text" value={value} onChange={onChange} />
		</div>
	);
};

export default Debounce;
