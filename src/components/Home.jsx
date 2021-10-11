import React from 'react';
import '.././App.css';

function Home(){
    return (
	<>
		<center>
		<div className="jumbotron">
		<h1 className="display-4">Hello, world!</h1>
		<p className="parrafo" > 
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, eum ipsa ut ex laboriosam eveniet nulla dolor, autem illo aut sunt fugiat laborum dolorem magni, recusandae at quidem aliquam impedit! 
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
