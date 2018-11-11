import React, { Component } from 'react';
import moment from 'moment';
import momentrecur from 'moment-recur';

class RecurWeeklyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().utc().format('YYYY-MM-DD'),
      instructions: "",
      playGroup: 0,
      weeks: 0,
      weekDays: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSelectWeekDays = this.handleSelectWeekDays.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormClear(event) {
    event.preventDefault();
    this.setState(
      {
        startDate: moment().utc().format('DD/MM/YYYY'),
        instructions: "",
        playGroup: 0,
        weeks: 0,
        weekDays: [],
      }
    );
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.playGroup != 0 && this.state.weeks != 0 && this.state.weekDays.length != 0) {
      let days = this.state.weeks * 7;
      let formPayload = { pickups: [] };
      let pickup = {};
      let userId = this.props.userId;
      let dates = [];
      let i = 1;
      let nextDay;
      while (i < days) {
        nextDay = moment(this.state.startDate).add(i, 'day').format('YYYY-MM-DD');
        let test = moment(nextDay).day();
        if (this.state.weekDays.includes(moment(nextDay).day())) {
          dates.push(nextDay);
        }
        i++;
      }
      this.props.selectedDogs.forEach((dog) => {
        dates.forEach((date) => {
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

  handleSelectWeekDays(event) {
    if (event.target.checked === true) {
      let newDays = this.state.weekDays;
      newDays.push(Number(event.target.value));
      this.setState({ weekDays: newDays });
    } else {
      let newDays = this.state.weekDays;
      let index = newDays.indexOf(Number(event.target.value));
      newDays.splice(index, 1);
      this.setState({ weekDays: newDays });
    }
  }

  render() {
    return(
      <div className="cell large-11 large offset-1">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Select a start date for your recurring appointment schedule.  If no date is selected, today will be set as the default date:
            <input
              type="date"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleChange}
            />
          </label>
          <label>
            What weekdays would you like to schedule for?
            <label>
              <input
                type="checkbox"
                id="Monday"
                value={1}
                onChange={this.handleSelectWeekDays}
              />
              Monday
            </label>
            <label>
              <input
                type="checkbox"
                id="Tuesday"
                value={2}
                onChange={this.handleSelectWeekDays}
              />
              Tuesday
            </label>
            <label>
              <input
                type="checkbox"
                id="Wednesday"
                value={3}
                onChange={this.handleSelectWeekDays}
              />
              Wednesday
            </label>
            <label>
              <input
                type="checkbox"
                id="Thursday"
                value={4}
                onChange={this.handleSelectWeekDays}
              />
              Thursday
            </label>
            <label>
              <input
                type="checkbox"
                id="Friday"
                value={5}
                onChange={this.handleSelectWeekDays}
              />
              Friday
            </label>
          </label>
          <label>
            How many weeks recurring?
            <select name="weeks" value={this.state.weeks} onChange={this.handleChange}>
              <option value={0}></option>
              <option value={1}>1 Week</option>
              <option value={2}>2 Weeks</option>
              <option value={3}>3 Weeks</option>
              <option value={4}>4 Weeks</option>
              <option value={5}>5 Weeks</option>
              <option value={6}>6 Weeks</option>
              <option value={7}>7 Weeks</option>
              <option value={8}>8 Weeks</option>
              <option value={9}>9 Weeks</option>
              <option value={10}>10 Weeks</option>
              <option value={11}>11 Weeks</option>
              <option value={12}>12 Weeks (Max)</option>
            </select>
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
    )
  }
}

export default RecurWeeklyForm
