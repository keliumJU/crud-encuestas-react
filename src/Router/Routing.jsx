import React from 'react';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import Register from '../components/auth/Register';
import Encuesta from '../components/encuestas/Encuesta'
import Seccion from '../components/encuestas/Seccion'
import Pregunta from '../components/encuestas/Pregunta'
import Home from '../components/Home';
import {Switch, Route} from 'react-router-dom';

function Routing(){

    return (
		<>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/encuesta" exact component={Encuesta} />
				<Route path="/encuesta/seccion/:id" exact component={Seccion} />
				<Route path="/encuesta/seccion/preguntas/:id" component={Pregunta} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route path="/register" component={Register} />
			</Switch>
		</>
    )
}

export default Routing;