import React from 'react';
import './index.css';
export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      contact: '',
    };
    this.selectItem = this.selectItem.bind(this);
  }
   myChangeHandler = (event) => {
    this.setState({contact: event.target.value});
  }
  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} value={selectedItem} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
       
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
          type="text" disabled value={selectedItem}
        />
        </div>
        <button className="submit">Submit</button>
      </form>
        
      </div>
    );
  }
}

