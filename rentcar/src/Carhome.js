import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import Carlist from './Carlist';
import Footer from './Footer';
import './car.css';

const Carhome = () => {
	return(
		 <div>
			<Navbar/>
			<Slider/>
			<Carlist/>
			<Footer/>
			
		</div>
	)
}

export default Carhome;