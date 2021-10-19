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
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptas, distinctio provident aliquid magnam obcaecati commodi quam ipsa odit quasi? Debitis voluptatum, dolores vero recusandae assumenda adipisci nisi error ab.</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptas, distinctio provident aliquid magnam obcaecati commodi quam ipsa odit quasi? Debitis voluptatum, dolores vero recusandae assumenda adipisci nisi error ab.</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptas, distinctio provident aliquid magnam obcaecati commodi quam ipsa odit quasi? Debitis voluptatum, dolores vero recusandae assumenda adipisci nisi error ab.</p>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptas, distinctio provident aliquid magnam obcaecati commodi quam ipsa odit quasi? Debitis voluptatum, dolores vero recusandae assumenda adipisci nisi error ab.</p>
			</div>

		</div>
		
	</>
    )
}

export default Home;
