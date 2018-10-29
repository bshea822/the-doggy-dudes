import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };

  }

  componentDidMount() {
    fetch('/api/v1/current_users',
    {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = '${response.status} (${response.statusText})',
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({ signedIn: true });
      } else {
        this.setState({ signedIn: false });
      }
    })
    .catch(error => console.error('Error in fetch: ${error.message}'));
  }

  render() {
    if (this.state.signedIn === true) {
      return(
        <div>
          <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline"><img src="https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/logo.png"></img></h1>
            <ul className="subnav-hero-subnav">
              <div className="left">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/'>Hours & Rates</Link></li>
                <li><Link to='/'>Forms</Link></li>
              </div>
                <div className="right">
                  <li><a href="/users/sign_out">Sign Out</a></li>
                </div>
            </ul>
          </header>
        </div>
      )
    } else {
      return(
        <div>
          <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline"><img src="https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/logo.png"></img></h1>
            <ul className="subnav-hero-subnav">
              <div className="left">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/'>Hours & Rates</Link></li>
                <li><Link to='/'>Forms</Link></li>
              </div>
                <div className="right">
                  <li><a href="/users/sign_in">Sign In</a></li>
                  <li><a href="/users/sign_up">Sign Up</a></li>
                </div>
            </ul>
          </header>
        </div>
      )
    }

  }
}

export default NavBar
