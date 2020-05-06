import React from 'react';
import ReactDOM from 'react-dom';
import Popup from "reactjs-popup";
import './car.css';


function display() {
   const cookievalue1 = escape(document.myform.cname.value) + ";";
   const cookievalue2 = escape(document.myform.idate.value) + ";";
   const cookievalue3 = escape(document.myform.rdate.value) + ";";
               document.cookie = "name=" + cookievalue1;
               document.cookie = "IssueDate=" + cookievalue2;
               document.cookie = "ReturnDate=" + cookievalue3;
               alert("Booking Confirmed with these details : " + " Name: " + cookievalue1 + " Issue date: " + cookievalue2 + " till =" + cookievalue3  );

}


const Form = () => (
 <Popup trigger={<button type="button" class="btn btn-primary bookbutton">Book Now</button>} position="top left">
    												{close => (
     													 <div>
        													<h2>Booking form</h2>
  															<form name = "myform" action = "" >
    															<div class="form-group">
      																<label>Customer Name:</label>
      																	<input type="text" class="form-control" id="name" name="cname" placeholder="Enter Name"/>
    													</div>
   														 <div class="form-group">
     														 <label>Contact Number:</label>
      															<input type="text" class="form-control" id="number" placeholder="Enter Number" name="cnumber"/>
    														</div>
    													<div class="form-group">
      																<label>Issue Date:</label>
      																	<input type="date" class="form-control" id="date1" placeholder="Enter Issue Date" name="idate"/>
    													</div>
    													<div class="form-group">
      																<label>Return Date:</label>
      																	<input type="date" class="form-control" id="date2" placeholder="Enter Return Date" name="rdate"/>
    													</div>
    													<button class="btn btn-primary" onClick={display}>Submit</button>
  															</form>
        														<a className="close" onClick={close}>
         															 &times;
        														</a>
      														</div>
    												)}
  												</Popup>
);



export default Form;