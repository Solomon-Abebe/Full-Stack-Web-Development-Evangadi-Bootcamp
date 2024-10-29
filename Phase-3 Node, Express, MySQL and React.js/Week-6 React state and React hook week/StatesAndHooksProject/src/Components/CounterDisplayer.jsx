import { Component } from "react";
import PropTypes from "prop-types";

class CounterDisplayer extends Component {

  render() {
    return (
      <div>
        
        <h3 style={{ fontSize: "2em" }}>
          Clicked:
          <span style={{ color: "red", fontWeight: 500 }}>
            {this.props.clicked}
          </span>{" "}
          times
        </h3>
      </div>
    );
  }
}

CounterDisplayer.propTypes = {
  clicked: PropTypes.number.isRequired,
}; 
export default CounterDisplayer;
