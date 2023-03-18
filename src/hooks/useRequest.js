import { useEffect, useState } from "react";

export const useRequest = (request) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			request()
				.then((res) => setData(res.data))
				.catch((error) => setError(error))
				.finally(() => setIsLoading(false));
		}, 5000);
	}, [request]);

	return [data, isLoading, error];
};
