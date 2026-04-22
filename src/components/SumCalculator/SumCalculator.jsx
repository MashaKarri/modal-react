import { Component } from "react";
import "./sumCalculator.css";

export class SumCalculator extends Component {
  state = {
    value1: 0,
    value2: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.value1 !== this.state.value1 ||
      nextState.value2 !== this.state.value2
    );
  }

  incrementValue1 = () => {
    this.setState((prev) => ({
      value1: prev.value1 + 1,
    }));
  };

  incrementValue2 = () => {
    this.setState((prev) => ({
      value2: prev.value2 + 1,
    }));
  };

  render() {
    const { value1, value2 } = this.state;

    return (
      <div className="sum-calculator">
        <h2 className="sum-title">Sum Calculator</h2>

        <p className="sum-value">Value 1: {value1}</p>
        <p className="sum-value">Value 2: {value2}</p>

        <h3 className="sum-result">Sum: {value1 + value2}</h3>

        <div className="sum-buttons">
          <button className="sum-btn" onClick={this.incrementValue1}>
            +1 to Value 1
          </button>

          <button className="sum-btn" onClick={this.incrementValue2}>
            +1 to Value 2
          </button>
        </div>
      </div>
    );
  }
}
