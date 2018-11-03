import React, { Component } from 'react';

class NewDogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogName: "",
      dogBreed: "",
      dogSize: "",
      dogBirthday: "",
      rabiesShot: null,
      rabiesDocs: "",
      otherShots: "",
      dogHandling: "",
      voiceCommands: "",
      dogAggression: "",
      dogFixed: null,
      dogReturn: "",
      dogIssues: "",
      tosAccept: null,
      tosName: "",
      tosDate: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();

  }

  render() {
    console.log(this.state.rabiesShot)
    return(
      <form>
        <label>
          Dog Name:
          <input
            type="text"
            name="dogName"
            value={this.state.dogName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Dog Breed:
          <input
            type="text"
            name="dogBreed"
            value={this.state.dogBreed}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Dog Size:
          <input
            type="text"
            name="dogSize"
            value={this.state.dogSize}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Dog Birthday:
          <input
            type="date"
            name="dogBirthday"
            value={this.state.dogBirthday}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Has your dog been fixed??<br/>
          <label>
            <input
              type="radio"
              name="dogFixed"
              value={true}
              onChange={this.handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="dogFixed"
              value={false}
              onChange={this.handleChange}
            />
            No
          </label>
        </label>
        <label>
          Has your dog had a rabies shot?<br/>
          <label>
            <input
              type="radio"
              name="rabiesShot"
              value={true}
              onChange={this.handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="rabiesShot"
              value={false}
              onChange={this.handleChange}
            />
            No
          </label>
        </label>
        <label>
          Please upload your dog's rabies documentation:
          <input
            type="text"
            name="rabiesDocs"
            value={this.state.rabiesDocs}
            onChange={this.handleChange}
          />
        </label>
        <label>
          What shot(s) has your dog received?
          <textarea
            name="otherShots"
            value={this.state.otherShots}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Is there anything we should know about your dog(s) that relates to our ability to safely handle your dog and to ensure the s/he does not pose a safety risk to others?
          <textarea
            name="dogHandling"
            value={this.state.dogHandling}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Does your dog respond to voice commands in a manner that will allow us to safely walk him.her OFF the leash and/or take him/her in and out of the car?
          <textarea
            name="voiceCommands"
            value={this.state.voiceCommands}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Has your dog ever bitten or injured another person or dog?  If yes please explain and provide details, including when, where, and the circumstances...
          <textarea
            name="dogAggression"
            value={this.state.dogAggression}
            onChange={this.handleChange}
          />
        </label>
        <button className="button" type="submit">Add Your Dog!</button>
      </form>
    );
  }
}

export default NewDogForm;
