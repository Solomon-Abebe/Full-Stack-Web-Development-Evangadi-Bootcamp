import { Component } from "react";
import PropTypes from "prop-types";

class EvenCounterDisplayer extends Component {
  render() {
    const { EvenCounts } = this.props;
    const evenCounts = EvenCounts % 2 === 0? EvenCounts : EvenCounts-1;
    return (
      <div>
        <h2 style={{ fontSize: "3em", color: "green" }}>2. Even Counter</h2>
        <h3 style={{ fontSize: "2em" }}>
          Clicked:
          <span style={{ color: "yellow", fontWeight: 500 }}>
            {evenCounts}{" "}
          </span>
          times
        </h3>
      </div>
    );
  }
}

EvenCounterDisplayer.propTypes = {
  EvenCounts: PropTypes.number.isRequired,
};

export default EvenCounterDisplayer;
