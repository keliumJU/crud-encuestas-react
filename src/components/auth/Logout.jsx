import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';


import '../.././App.css';

const LogOut = () => {

	let history=useHistory();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			localStorage.clear();
			history.push('/');
		}
	});

    return (
		<>
		</>
    );
};

export default LogOut;