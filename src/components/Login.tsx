import React, { useState } from "react";
import s from './Login.module.css';

export default function Register({ setLogin }) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [inputMsg, setInputMsg] = useState({ key: null, message: null });

	const validateEmail = (email: String) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const handleInputChange = ({ value, name }) => {
		if (inputMsg.message) setInputMsg({ key: null, message: null });
		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
		}
	}

	const handleSubmit = (e:any) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setInputMsg({key: "email", message: "Please enter a valid email address"});
		} else if (!password){
			setInputMsg({ key: "password", message: "Please enter a valid password" });
		} else {
			setLogin(true)
		}
	}

	return (
		<div>
			<div className="header">
				<span>Welcome</span>
			</div>

			<div className="content">
				<h1>{"Login"}</h1>
				<form onSubmit={e => handleSubmit(e)}>
					<div className={s.formGroup}>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={(e) => handleInputChange(e.target)}
							autoFocus // eslint-disable-line jsx-a11y/no-autofocus
						/>
						{inputMsg.key === "email" && <p>{inputMsg.message}</p>}
					</div>
					<div className={s.formGroup}>
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={(e) => handleInputChange(e.target)}
						/>
						{inputMsg.key === "password" && <p>{inputMsg.message}</p>}
					</div>

					<div className={s.formGroup}>
						<button className="button" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
