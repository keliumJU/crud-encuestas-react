import React from 'react';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import Register from '../components/auth/Register';
import Encuesta from '../components/encuestas/Encuesta'
import Home from '../components/Home';
import {Switch, Route} from 'react-router-dom';

function Routing(){

    return (
		<>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/encuesta" component={Encuesta} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route path="/register" component={Register} />
			</Switch>
		</>
    )
}

export default Routing;