import React from 'react';
import ReactDOM from 'react-dom';
import './car.css';


function ReadCookie() {
               var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );
            }

const Booking = () =>{

	return(
			<div className="container">
				<h1> List Of current Bookings:</h1>
			</div>
		)
}
export default Booking;