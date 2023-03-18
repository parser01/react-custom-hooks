import { useCallback, useRef } from "react";

export const useDebounce = (callback, delay) => {
	const timerRef = useRef(null);

	const debounce = useCallback(
		(...args) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			timerRef.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);

	return debounce;
};
