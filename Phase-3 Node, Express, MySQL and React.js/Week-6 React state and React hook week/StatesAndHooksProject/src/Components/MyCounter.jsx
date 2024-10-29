import  { Component } from 'react';
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      eventCount: 0,
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    //return { count: prevState.count + 1  }; // For return type of function without ()
  }
  render() {
    return (
      <div>
        <h3 style={{ fontSize: "3em", color: "green" }}>1. Counter displayer</h3>
        <button onClick={this.allClicksCounter}>Click Here</button>
        <CounterDisplayer clicked={this.state.count} />
        <EvenCounterDisplayer EvenCounts={this.state.count} />
      </div>
    );
  }
}

export default MyCounter;
