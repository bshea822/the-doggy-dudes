import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class NewDogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogName: "",
      dogBreed: "",
      dogSize: "",
      dogBirthday: "",
      rabiesShot: undefined,
      rabiesDocs: [],
      otherShots: "",
      dogHandling: "",
      voiceCommands: "",
      dogAggression: "",
      dogFixed: undefined,
      dogReturn: "",
      dogIssues: "",
      tosAccept: undefined,
      tosName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleFormClear() {
    event.preventDefault();
    this.setState(
      {
        dogName: "",
        dogBreed: "",
        dogSize: "",
        dogBirthday: "",
        rabiesShot: undefined,
        rabiesDocs: [],
        otherShots: "",
        dogHandling: "",
        voiceCommands: "",
        dogAggression: "",
        dogFixed: undefined,
        dogReturn: "",
        dogIssues: "",
        tosAccept: undefined,
        tosName: ""
      }
    );
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.dogName != "" && this.state.dogBreed != "" && this.state.dogsize != "" && this.state.rabiesShot != null && this.state.dogFixed != null && this.state.tosAccept != null && this.state.tosName != "") {

      let formPayload = {
        name: this.state.dogName,
        breed: this.state.dogBreed,
        size: this.state.dogSize,
        birthday: this.state.dogBirthday,
        rabies: this.state.rabiesShot,
        rabies_docs: this.state.rabiesShot,
        shots: this.state.otherShots,
        dog_handling: this.state.dogHandling,
        voice_commands: this.state.voiceCommands,
        dog_aggression: this.state.dogAggression,
        fixed: this.state.dogFixed,
        dog_return: this.state.dogReturn,
        dog_issues: this.state.dogIssues,
        tos_accept: this.state.tosAccept,
        tos_name: this.state.tosName
      };

      this.props.addNewDog(formPayload);
      this.handleFormClear();
      this.props.toggleAddDogForm();
    }
  }

  onDrop(file) {
    if(file.length == 1) {
      this.setState({ rabiesDoc: file });
    } else {
      this.setState({ message: 'You can only upload one file.'});
    }
  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div className="grid-x grid-margin-x">
          <div className="cell large-6">
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
              Has your dog been sterilized?<br/>
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
            <div className="termsx">
              <h4>Terms of Service & Client Agreement</h4>
              <div className="section-body">
                <p>
                  These terms of service and client agreement (the “Agreement”) apply to all reservations for services, whether single group or full day (each a “PlayGroup”) with The Doggy Dudes, LLC (the “Company”). By signing this Agreement, the undersigned (“I”) represents that I am the legal owner of my dog (the “Dog”) or duly authorized agent for the owner. Medical History and Health.

                  \n\nI represent that the Dog is in good health and has not been exposed to any contagious diseases within a thirty day period prior to any PlayGroup. I further agree to provide the Company with proof of current required inoculations against distemper, kennel cough, parvo, lepto, bordetella, and rabies. I agree to stay current with inoculations and other medical treatment and preventative care and will notify the Company immediately if I learn or suspect the Dog has parasites or viruses and agree to cancel all scheduled PlayGroups and not make further Dates until I receive clearance from the Company in conjunction with the Dog’s veterinarian.

                  \n\nI understand and acknowledge that my dog will be kept in the company of other dogs during the PlayGroup. I understand and acknowledge that even with current vaccinations, it is still possible for the Dog to become ill during or after the PlayGroup. I understand and acknowledge that by attending a PlayGroup there is a risk that the Dog may contract kennel cough, upper respiratory illness, diarrhea, nicks, cuts, scrapes, punctures, other viruses and/or bites during the PlayGroup, and that in the unlikely event the Dog is injured by another dog, that you will not hold the Company responsible for that injury.

                  \n\nI agree that if in my absence, the Dog should be injured, appear sick, or otherwise reasonably appears to require immediate veterinary attention as determined by the Company, in its sole and absolute discretion, I hereby authorize the Company to consult with or utilize the services of any veterinarian selected by the Company. I understand that I am responsible for any charges, including transportation costs, incurred with respect to any such veterinary services. I name the Company as my attorney-in- fact to act in my name for the sole purpose of providing emergency medical care to the Dog.
                </p>
              </div>
              <div className="section-head">
                <h4>Company Policies and Procedures</h4>
              </div>
              <div className="section-body">
                <p>
                  I understand and agree that the Company may choose to use leashes, choke collars, spray bottles or other appropriate means of maintaining control over the Dog or altering the behavior of the Dog and I hereby authorize the Company to use any and all appropriate methods.

                  \n\nI understand and agree that the Company may, in its sole discretion, remove the Dog from the group and may not permit the Dog to interact further with other dogs during any PlayGroup.

                  \n\nI understand and agree that while the Company will make every effort to accommodate specific time slots requested, the Company cannot guarantee pick up and drop off times.
                </p>
              </div>
              <div className="section-head">
                <h4>Release of Liability and Indemnification</h4>
              </div>
              <div className="section-body">
                <p>
                  I understand and acknowledge that by allowing the Dog to participate in a PlayGroup, there is a risk that the Dog may be injured or killed by other dogs, by virtue of the natural environment, by collisions with vehicles, by the negligence, recklessness or deliberate acts of third parties; or by themselves, by virtue of ingesting foreign objects, chewing themselves, chewing foreign objects, or by any other unknown and unknowable circumstances and that the Dog may contract diseases or ailments from other dogs, including infections and viruses.

                  \n\nI understand and acknowledge that by allowing the Dog to participate in a PlayGroup, there is a risk that the Dog may run away; be struck by a vehicle, be in a vehicle involved in a collision, or be caught in a natural disaster, fire or other unforeseen event. In the event one of the aforementioned occurs, emergency medical care or any items necessary for the care of the Dog (including food, water, medicine, and electricity) may be unavailable due to circumstances beyond the control of the Company.


                  \n\nI hereby waive, release and discharge the Company and its owners, agents, officers and employees from any and all common law, statutory or other claims, complaints, actions, losses, damages, liabilities, penalties, judgments or costs, in law or in equity, for any death, disability, injury, property damage, property theft, loss of companionship or liability of any nature which may hereafter accrue to me and my estate as a direct or indirect result of the Dog’s participation in, and travel to and from, a PlayGroup;

                  \n\nI hereby hold harmless, defend and indemnify the Company and its owners, agents, officers, and employees from and against any and all claims, complaints, actions, losses, damages or liabilities of any nature including all costs, expenses, fees, medical or veterinary bills and attorneys’ fees, which in any manner result from the actions of the Dog during or participation in a PlayGroup, whether caused by the negligence of the Company or otherwise; and It is the intention of the parties that the foregoing releases shall be effective as a bar to all actions, claims, losses, liabilities, damages or costs, of any kind or nature, known or unknown, foreseeable or unforeseeable, arising out of the actions of the Company to the maximum extent permissible under applicable law. The parties expressly agree that this release of liability and indemnification shall be given full force and effect in accordance with each and all of its terms and provisions.


                  \n\nThis Agreement sets forth the entire agreement and understanding of the parties relating to the subject matter hereof, and merges and supersedes all prior discussions and writings between them with respect to the contents of this Agreement. There are no third party beneficiaries to this Agreement. If any provision (or part thereof) of this Agreement is determined by a court of competent jurisdiction as part of a final non-appealable ruling, government action or binding arbitration, to be invalid, illegal, or otherwise unenforceable, such provision shall be enforced as nearly as possible in accordance with the stated intention of the parties, while the remainder of this Agreement shall remain in full force and effect and bind the parties according to its terms. This Agreement shall be governed by the law of the State of Illinois, excluding any provision of law which would require the application of the law of any other state. This Agreement may be executed via electronic signatures, and in multiple counterparts, all of which together will constitute one original document.
                </p>
              </div>
            </div>
            <label>
              <input
                type="checkbox"
                name="tosAccept"
                onClick={this.handleChange}
                value={this.state.tosAccept}
              />
              I Accept Terms & Conditions
            </label>
            <label>
              Your Name:
              <input
                type="text"
                name="tosName"
                onChange={this.handleChange}
                value={this.state.tosName}
              />
            </label>
          </div>
          <div className="cell large-6">
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
            <label>
              Does/do your dog(s) take issue with any specific breeds or types of dogs (ie. small dogs, big dogs)?
              <textarea
                name="dogIssues"
                value={this.state.dogIssues}
                onChange={this.handleChange}
              />
            </label>
            <label>
              If you will not be home upon pick up or drop off, please provide the necessary information to access your home, to include specific instructions about any alarm:
              <textarea
                name="dogReturn"
                value={this.state.dogReturn}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell large-2">
            <input className="button" type="submit" value="Add Your Dog!" />
          </div>
          <div className="cell large-2">
            <input className="button" type="button" onClick={this.handleFormClear} value="Clear Form" />
          </div>
        </div>
      </form>
    );
  }
}

export default NewDogForm;
