import { useRef } from "react";
import { useHover } from "../hooks/useHover";

const Hover = () => {
	const ref = useRef();
	const isHover = useHover(ref);

	return (
		<div
			style={{
				width: 300,
				height: 300,
				backgroundColor: isHover ? "red" : "blue",
			}}
			ref={ref}
		></div>
	);
};

export default Hover;
