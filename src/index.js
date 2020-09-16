import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './components/wheel';
import Bottom from './components/wheel/Bottom';
import Progress from './components/wheel/Progress';
import './styles.css'; 

export class App extends React.Component {
  constructor() {
    super();
    this.places = ['Better Luck Next Time', '2X Savings', 'RS.100 Cashback', 'RS.20', 'RS.50', '1.5X Savings','2X Savings','RS.50 Cashback'];
  }

  render() {
    return (
      <div className="App">
        <h3 className="heading"><span>&#8592;</span> Your rewards</h3>
        <Wheel items={this.places} />
        <Progress/>
        <Bottom/>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
