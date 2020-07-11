import React, { useState, useEffect } from "react";
import Login from '../components/Login';
import Machine from '../components/Machine';

export default function Register() {

	const [loggedIn, setLogin] = useState(false);

	return (
		<div className="root">
			{loggedIn ? 
				<Machine />
				:
				<Login setLogin={setLogin} />
			}
		</div>
	);
}
