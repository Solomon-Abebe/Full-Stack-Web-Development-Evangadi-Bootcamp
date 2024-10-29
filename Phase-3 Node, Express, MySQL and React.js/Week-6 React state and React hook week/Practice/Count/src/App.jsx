import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Must initialize state first
    this.state = { count: 0 };
  }

  handleClick() {
    // Increment the count when the button is clicked
    this.setState(
      {
        count: this.state.count + 1,
      },
      function () {
        // setState is asynchronous! This function gets called
        // when it's finished.
        console.log("Job's done");
      }
    );
  }

  render() {
    return (
      <div className="app">
        <div className="click-count">Button presses: {this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>Add One</button>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;