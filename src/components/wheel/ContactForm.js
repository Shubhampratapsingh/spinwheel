import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.js';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contact: '' };
  }
  myChangeHandler = (event) => {
    this.setState({contact: event.target.value});
  }
  render() {
    return (
      <form className="resultform">
       <h4>Hello {this.state.contact}</h4>
        <div className="contactdiv">
        <label>Contact: </label>
        <input
          type="number" onChange={this.myChangeHandler}
        />
        </div>
        <div className="resultdiv">
        <label>Result: </label>
        <input
          type="text" disabled 
        />
        </div>
        <button className="submit">Submit</button>
      </form>
    );
  }
}
export default ContactForm;