import React, { Component } from 'react';
import moment from 'moment';

class MultipleDaysForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datesAdded: [],
      pickupDate: "",
      instructions: "",
      playGroup: undefined,
      currentDay: moment().utc().format('MMMM Do YYYY')
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.showAddedDates = this.showAddedDates.bind(this);
    this.addDate = this.addDate.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormClear(event) {
    event.preventDefault();
    this.setState(
      {
        datesAdded: [],
        pickupDate: "",
        instructions: "",
        playGroup: 0
      }
    );
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.datesAdded.length > 0 && this.state.playGroup != 0) {
      let formPayload = { pickups: [] };
      let pickup = {};
      let userId = this.props.userId;
      this.props.selectedDogs.forEach((dog) => {
        this.state.datesAdded.forEach((date) => {
          pickup = {
            user_id: userId,
            dog_id: dog.id,
            service_id: this.state.playGroup,
            pickup_date: moment(date).format('DD/MM/YYYY'),
            instructions: this.state.instructions
          };
          formPayload.pickups.push(pickup);
        });
      });
      this.props.addPickups(formPayload);
      this.handleFormClear(event);
    }
  }

  showAddedDates() {
    if (this.state.datesAdded.length > 0) {
      let dates = this.state.datesAdded;
      dates = dates.sort();
      dates = dates.join(", ");
      return(
        <div>
          Added Dates: {dates}
        </div>
      )
    }
  }

  addDate(event) {
    event.preventDefault();
    let newDates = this.state.datesAdded;
    newDates.push(moment(this.state.pickupDate).format('MM/DD/YYYY'));
    this.setState(
      {
        datesAdded: newDates,
        pickupDate: ""
      }
    )
  }

  render() {
    return(
      <div className="cell large-11 large-offset-1">
        <form onSubmit={this.handleFormSubmit}>
          <div className="grid-x">
            <div className="cell large-9 large-offset-1 align-left">
              {this.showAddedDates()}
              <label>
                Select Play Date:
                <input
                  type="date"
                  name="pickupDate"
                  value={this.state.pickupDate}
                  onChange={this.handleChange}
                />
              </label>
              <button className="button" onClick={this.addDate}>Add Date</button>
            </div>
          </div>
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

export default MultipleDaysForm;
