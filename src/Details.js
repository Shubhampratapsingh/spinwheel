import React from 'react';
import ReactDOM from 'react-dom';
import Popup from "reactjs-popup";
import './car.css';

const Details = () => (
 <Popup trigger={<button type="button" class="btn btn-primary">Details</button>} position="top left">
    												{close => (
     													 <div className="details-popup">
        													<h2>Details</h2>
  															   <p>It has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1497 cc while the Petrol engine is 1199 cc. It is available with the Manual and Automatic transmission.</p>
    <table class="table table-striped">
      <tr className="table-primary">
        <td>ARAI Mileage</td>
        <td>21.5 kmpl</td>
      </tr>
      <tr className="table-danger">
        <td>Fuel Type</td>
        <td>Diesel</td>
      </tr>
      <tr className="table-primary">
        <td>Seating Capacity</td>
        <td>5</td>
      </tr>
      <tr className="table-danger">
        <td>Fuel Tank Capacity</td>
        <td>44</td>
      </tr>
      </table>
        														<a className="close" onClick={close}>
         															 &times;
        														</a>
      														</div>
    												)}
  												</Popup>
);



export default Details;