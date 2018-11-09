import React, { Component } from 'react';
import moment from 'moment';

class SingleDayForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      pickupDate: "",
      instructions: "",
      playGroup: undefined,
      currentDay: moment().utc().format('MMMM Do YYYY')
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormClear() {
    event.preventDefault();
    this.setState(
      {
        pickupDate: "",
        instructions: "",
        playGroup: undefined
      }
    );
  }

  handleFormSubmit() {
    event.preventDefault();
    if (this.state.pickupDate != "" && this.state.playGroup != "") {
      let formPayload = { pickups: [] };
      let pickup = {};
      this.props.selectedDogs.forEach((dog) => {
        pickup = {
          dog_id: dog.id,
          service_id: this.state.playGroup,
          pickup_date: moment(this.state.pickupDate).format('DD/MM/YYYY'),
          instructions: this.state.instructions
        };
        formPayload.pickups.push(pickup);
        debugger
      });
    }
  }

  render() {
    return(
      <div className="cell large-11 large-offset-1">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Select Play Date:
            <input
              type="date"
              name="pickupDate"
              value={this.state.pickupDate}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Select A Play Group:
            <select name="playGroup" value={this.state.playGroup} onChange={this.handleChange}>
              <option value={0} name="playGroup"></option>
              <option value={1} name="playGroup">Early Morning 8:00 AM-10:00 AM</option>
              <option value={2} name="playGroup">Mid Morning 10:30 AM-12:30 PM</option>
              <option value={3} name="playGroup">Early Afternoon 1:00 AM-3:00 PM</option>
            </select>
          </label>
          <label>
            Instructions:
            <textarea value={this.state.instructions} name="instructions" onChange={this.handleChange}/>
          </label>
          <button className="button" type="submit">Submit</button>
          <button className="button" onClick={this.handleFormClear}>Clear Form</button>
        </form>
      </div>
    );
  }
}

export default SingleDayForm;
