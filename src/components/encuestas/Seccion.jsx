import React, {useEffect} from 'react';
import '../.././App.css';

function Seccion({match}){
	useEffect(()=>{
		console.log(match)
	},[]);
    return (
	<>
		<h1>Secciones</h1>
	</>
    )
}

export default Seccion;