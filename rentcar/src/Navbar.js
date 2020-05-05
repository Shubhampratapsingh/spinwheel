import React from 'react';
import ReactDOM from 'react-dom';
import './car.css';
import carlogo from './carlogo.png';

function ReadCookie() {
               var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );
            }


const Navbar = () => {
	return(
		 <div className="container">
				<div className="jumbotron text-center col-md-12 col-xs-12 col-sm-12 top-strip">
					<p><strong><span className="text-danger"> ALERT</span></strong> COVID-19 Update: Stay Home Stay Safe</p> 
				</div>
				<div id="header" className="col-md-12 col-xs-12 col-sm-12">
                	<div id="brand" className="col-md-8 col-xs-8 col-sm-8">
                    	
                    	<img src={carlogo} className="car-logo"/>
                </div>
                <div id="searchBox" className="col-md-4 col-xs-4 col-sm-4">
                    <form method="get">
                        <input type="text" className="text" id="searchbar"/>
                        <input type="submit" value="Search a Car" className="submit"/>
                    </form>
                </div>
                
            </div>
			<nav className="navbar navbar-expand-sm  navbar-dark">
  				<h3>CAR-RENT</h3>
  				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    				<span className="navbar-toggler-icon"></span>
  				</button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={ReadCookie}>Current Booking</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="#">Careers</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="https://www.linkedin.com/in/shubham-pratap--singh/" target="_blank">Contact Us</a>
      </li>    
    </ul>
  </div>  
</nav>

		</div>
	)
}

export default Navbar;