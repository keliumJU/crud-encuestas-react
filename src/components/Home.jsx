import React from 'react';
import '.././App.css';

function Home(){
    return (
	<>
		<center>
		<div class="jumbotron">
		<h1 class="display-4">Hello, world!</h1>
		<p className="parrafo" > 
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, eum ipsa ut ex laboriosam eveniet nulla dolor, autem illo aut sunt fugiat laborum dolorem magni, recusandae at quidem aliquam impedit! 
		</p>
		<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
		<hr class="my-4" />
		<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
		<a class="btn btn-primary btn-lg" href="#home" role="button">Learn more</a>
		</div>
		</center>
	</>
    )
}

export default Home;
