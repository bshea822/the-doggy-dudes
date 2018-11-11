import React, { Component } from 'react';
import moment from 'moment';
import SingleDayForm from './SingleDayForm';
import MultipleDaysForm from './MultipleDaysForm';
import RecurWeeklyForm from './RecurWeeklyForm';

class ScheduleFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupDate: "",
      instructions: "",
      playGroup: null,
      selectedDays: [],
      scheduleType: "",
      currentDay: moment().utc().format('MMMM Do YYYY')
    };
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div className="grid-x grid-margin-x schedule-form-container">
        <div className="cell large-11 large-offset-1">
          <label>
            Please select how you would like to schedule your dog(s) playgroups:
            <label>
              <input
                type="radio"
                name="scheduleType"
                value="single"
                onChange={this.handleChange}
              />
              Single Day
            </label>
            <label>
              <input
                type="radio"
                name="scheduleType"
                value="multiple"
                onChange={this.handleChange}
              />
              Multiple Days
            </label>
            <label>
              <input
                type="radio"
                name="scheduleType"
                value="recurring"
                onChange={this.handleChange}
              />
              Recurring Weekly
            </label>
          </label>
        </div>
        {this.state.scheduleType === "single" && <SingleDayForm
          selectedDogs={this.props.selectedDogs}
          addPickups={this.props.addPickups}
          userId={this.props.userId}
        />}
        {this.state.scheduleType === "multiple" && <MultipleDaysForm
          selectedDogs={this.props.selectedDogs}
          addPickups={this.props.addPickups}
          userId={this.props.userId}
        />}
        {this.state.scheduleType === "recurring" && <RecurWeeklyForm
          selectedDogs={this.props.selectedDogs}
          addPickups={this.props.addPickups}
          userId={this.props.userId}
        />}
      </div>
    );
  }
}

export default ScheduleFormContainer;
