import React from 'react';
import '.././App.css';

function Home(){
    return (
	<>
		<center>
			<div className="jumbotron">
				<h1 className="display-4">¡Crea tu propia ENCUESTA!</h1>
				
				<p className="parrafo" > 
				Fácil, potente, e innovador. Crea tus encuestas con facilidad y confianza! Herramientas estadísticas. Sistema innovador. 100% Gratis por siempre. Sencillo, potente, rápido
				</p>
				
				<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<hr className="my-4" />
				<p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
				<a className="btn btn-primary btn-lg" href="#home" role="button">Learn more</a>
			</div>
		</center>
	</>
    )
}

export default Home;
