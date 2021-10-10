import React from 'react';
import './App.css';
import NaBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/Home';

function App(){
	return (
		<div className="App">
			<NaBar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;