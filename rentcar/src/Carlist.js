import React from 'react';
import ReactDOM from 'react-dom';
import Popup from "reactjs-popup";
import Form from './Form';
import Details from './Details';
import './car.css';
import suzuki from './suzuki.jpg';
import ford from './ford.jpg';
import honda from './honda.jpg';
import tata from './tata.png';

const Carlist = () =>{

	return(
			<div className="container">
				<div className="col-sm-12 col-xs-12 col-md-12 list-section1">
						<div className="card col-sm-6 col-xs-6 col-md-6 card-1">
    					<img className="card-img-top grow" src={tata} alt="Card image"/>
   							 <div className="card-body">
     							 <h4 className="card-title text-center">TATA NEXON</h4>
      								<p className="card-text text-center">Deep Blue color with 4 seater</p>
      								<p className="text-center"> Rent Per Day: Rs. 350</p>
      								<Details/>
      									<Form/>
														
    						</div>
  						</div>
  						<div className="card col-sm-6 col-xs-6 col-md-6 card-2">
    					<img className="card-img-top grow" src={ford} alt="Card image"/>
   							 <div className="card-body">
     							 <h4 className="card-title text-center">Ford</h4>
      								<p className="card-text text-center">Deep Blue color with 4 seater</p>
      								<p className="text-center"> Rent Per Day: Rs. 850</p>
      								<Details/>
      									<Form/>
    						</div>
  						</div>
				</div>

							<div className="col-sm-12 col-xs-12 col-md-12 list-section2">
						<div className="card col-sm-6 col-xs-6 col-md-6 card-1">
    					<img className="card-img-top grow" src={suzuki} alt="Card image"/>
   							 <div className="card-body">
     							 <h4 className="card-title text-center">Suzuki</h4>
      								<p className="card-text text-center">Dark Black color with 4 seater</p>
      								<p className="text-center"> Rent Per Day: Rs. 1350</p>
      								<Details/>
      									<Form/>
    						</div>
  						</div>
  						<div className="card col-sm-6 col-xs-6 col-md-6 card-2">
    					<img className="card-img-top grow" src={honda} alt="Card image"/>
   							 <div className="card-body">
     							 <h4 className="card-title text-center">Honda</h4>
      								<p className="card-text text-center">Royal Red color with 4 seater</p>
      								<p className="text-center"> Rent Per Day: Rs. 950</p>
      								<Details/>
      									<Form/>
    						</div>
  						</div>
				</div>
			</div>
		)
}

export default Carlist;