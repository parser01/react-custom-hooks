import { useEffect, useState } from "react";
import "./Validation.css";

export const useValidation = (value, validations) => {
	const [isEmptyError, setIsEmptyError] = useState("");
	const [isEmailError, setIsEmailError] = useState("");
	const [minLengthError, setMinLengthError] = useState("");
	const [maxLengthError, setMaxLengthError] = useState("");
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		validations.forEach((validation) => {
			switch (validation.type) {
				case "isEmpty":
					if (value) {
						setIsEmptyError("");
					} else {
						setIsEmptyError(validation.message);
					}
					break;

				case "minLength":
					if (value && value.length < validation.minLength) {
						setMinLengthError(validation.message);
					} else {
						setMinLengthError("");
					}
					break;

				case "maxLength":
					if (value.length > validation.maxLength) {
						setMaxLengthError(validation.message);
					} else {
						setMaxLengthError("");
					}
					break;

				case "isEmail":
					const validEmailRegex =
						/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

					if (value && !validEmailRegex.test(value)) {
						setIsEmailError(validation.message);
					} else {
						setIsEmailError("");
					}
					break;

				default:
				// do nothing
			}
		});
	}, [validations, value]);

	useEffect(() => {
		if (isEmptyError || minLengthError || maxLengthError || isEmailError) {
			setIsValid(false);
		} else {
			setIsValid(true);
		}
	}, [isEmptyError, minLengthError, maxLengthError, isEmailError]);

	return {
		isEmptyError,
		minLengthError,
		maxLengthError,
		isEmailError,
		isValid,
	};
};

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);

	const validationError = useValidation(value, validations);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onBlur = () => {
		setIsDirty(true);
	};

	return {
		value,
		isDirty,
		...validationError,
		onChange,
		onBlur,
	};
};

const Validation = () => {
	const email = useInput("", [
		{ type: "isEmpty", message: "Email cannot be empty" },
		{ type: "isEmail", message: "Email is not valid" },
	]);
	const password = useInput("", [
		{ type: "isEmpty", message: "Password cannot be empty" },
		{
			type: "minLength",
			message: "Password must conatain at least 3 characters",
			minLength: 3,
		},
		{
			type: "maxLength",
			message: "Password must conatain at most 8 characters",
			maxLength: 8,
		},
	]);

	return (
		<form className="form">
			<div className="title">Sign up</div>

			<div className="input-container">
				{email.isDirty && email.isEmptyError && (
					<div className="error-message">{email.isEmptyError}</div>
				)}
				{email.isDirty && email.isEmailError && (
					<div className="error-message">{email.isEmailError}</div>
				)}
				<input
					className="input"
					name="email"
					type="text"
					placeholder="Enter your email"
					value={email.value}
					onChange={email.onChange}
					onBlur={email.onBlur}
				/>
			</div>

			<div className="input-container">
				{password.isDirty && password.isEmptyError && (
					<div className="error-message">{password.isEmptyError}</div>
				)}
				{password.isDirty && password.minLengthError && (
					<div className="error-message">{password.minLengthError}</div>
				)}
				{password.isDirty && password.maxLengthError && (
					<div className="error-message">{password.maxLengthError}</div>
				)}
				<input
					className="input"
					name="password"
					type="password"
					placeholder="Enter your password"
					password={password.value}
					onChange={password.onChange}
					onBlur={password.onBlur}
				/>
			</div>

			<button
				className="btn-submit"
				type="submit"
				disabled={!email.isValid || !password.isValid}
			>
				Sign up
			</button>
		</form>
	);
};

export default Validation;
