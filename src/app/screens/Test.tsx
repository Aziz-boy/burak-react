// @ts-nocheck
import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeDetail = () => {
    this.setState({
      color: "blue",
      brand: "Tesla",
      model: "Model S",
      year: 2023,
    });
  };

  componentDidMount() {
    console.log("componentDidMount1");
    // runs after first render => RETRIEVE FROM BACKEND SERVER
  }

  componentWillUnmount() {
    console.log("componentWillUnmount1");
    // runs before component unmount
  }

  componentDidUpdate() {
    console.log("componentDidUpdate1");
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color {this.state.color} - Model: {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeDetail}>
          Change color
        </button>
      </div>
    );
  }
}

export default Test;
