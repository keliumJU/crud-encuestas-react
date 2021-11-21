import React from 'react';
import '.././App.css';

function Home(){
    return (
	<>
		<div className="grid">

			<div className="grid-uno">
				<div className="grid-anidado-uno">
					<h1>Registrate <span>y Opina </span> contestando encuestas</h1>
				</div>
				<div className="grid-anidado-dos">
					<img src="./mujer-encuesta.png" alt="" />
				</div>
			</div>

			<div className="grid-dos">
				<div className="container-grid-dos border m-4 position-relative">
					<div className="container-formulario position-absolute top-50 start-50 translate-middle">
						<p> ¡Regístrate YA!</p>
						<form>
							<div className="form-group">
								<label for="exampleInputName">¿Cuál es tu primer nombre?</label>
								<input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="NameHelp" placeholder="Enter first name"/>
							</div>
							<div className="form-group">
								<label for="exampleInputLastName">¿Cuál es tu primer apellido?</label>
								<input type="lastname" className="form-control" id="exampleInputLastName" placeholder="Enter first lastname"/>
							</div>
							<div className="form-check">
								<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
								<label className="form-check-label" for="exampleCheck1">Check me out</label>
							</div>
								<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>

			<div className="grid-tres">
				<div className="grid-anidado-tres-uno">
						<h2>¡Únete a la MEJOR comunidad de Opinión Online!</h2>
				</div>

				<div className="grid-anidado-tres-dos">
					<div className="grid-anidado-tres-seccion1">
						<div className="gats1-nombre-seccion1">
							<p>Márketin Digital</p>
						</div>
						<div className="gats1-descripcion-seccion1">
							<div className="gats1-imagen-seccion1">
								<p>Imágen</p>
							</div>
							<div className="gats1-contenido-imagen-seccion1">
								<p>Contenido-Descripción</p>
							</div>
						</div>
					</div>
					<div className="grid-anidado-tres-seccion2">
						<div className="gats2-nombre-seccion2">
								<p>Testing</p>
						</div>
						<div className="gats2-descripcion-seccion2">
							<div className="gats2-imagen-seccion2">
									<p>Imágen</p>
							</div>
							<div className="gats2-contenido-imagen-seccion2">
									<p>Contenido-Descripción</p>
							</div>
						</div>
					</div>
					<div className="grid-anidado-tres-seccion3">
						<div className="gats3-nombre-seccion3">
								<p>Testing</p>
						</div>
						<div className="gats3-descripcion-seccion3">
							<div className="gats3-imagen-seccion3">
									<p>Imágen</p>
							</div>
							<div className="gats3-contenido-imagen-seccion3">
									<p>Contenido-Descripción</p>
							</div>
						</div>	
					</div>
				</div>
			</div>

			<div className="grid-cuatro">
					<div className="g4-info1">
						<p>Info 1</p>
					</div>
					<div className="g4-info2">
						<p>Info 2</p>
					</div>
			</div>

			<div className="grid-cinco">
					<div className="g5-info1">
							<p>Info 1</p>
					</div>
					<div className="g5-info2">
							<p>Info 2</p>
					</div>					
			</div>
		</div>
		
	</>
    )
}

export default Home;
