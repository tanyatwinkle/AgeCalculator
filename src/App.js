import React, { Component } from 'react';
import "./App.css";
class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDate: '',
      age: null,
    };
  }

  handleDateChange = (e) => {
    this.setState({
      inputDate: e.target.value,
    });
  };

  calculateAge = () => {
    const inputDate = new Date(this.state.inputDate);
    const today = new Date();
    const ageDiff = today - inputDate;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    this.setState({
      age: calculatedAge,
    });
  };

  render() {
    return (
      <center>
      <div>
        <label htmlFor="inputDate"><h1>Enter your birthdate</h1></label>
        <input
          type="date"
          id="inputDate"
          value={this.state.inputDate}
          onChange={this.handleDateChange}
        />
        <br/>
        <br/>
        <button class="blu" onClick={this.calculateAge}>submit</button>
        {this.state.age && <p><h3>Your age is {this.state.age} years.</h3></p>}
      </div>
      </center>
    );
  }
}

export default AgeCalculator;