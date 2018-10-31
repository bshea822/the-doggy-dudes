import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
    this.userSignOut = this.userSignOut.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/users',
    {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({ currentUser: data.user });
      } else {
        this.setState({ currentUser: null });
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  userSignOut(event) {
    fetch('/users/sign_out',
    {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then(response => {
      this.setState({ currentUser: null });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        currentUser: this.state.currentUser
      });
    });

    if (this.state.currentUser) {
      return(
        <div>
          <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline"><Link to='/'><img src="https://s3.us-east-2.amazonaws.com/doggy-dudes-images/images/logo.png"></img></Link></h1>
            <ul className="subnav-hero-subnav">
              <div className="left">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>Services</Link></li>
                <li><Link to='/pickups'>Schedule Pickups</Link></li>
              </div>
                <div className="right">
                  <li><Link to='/' onClick={this.userSignOut}>Sign Out</Link></li>
                </div>
            </ul>
          </header>
          <div className="content">
            { children }
          </div>
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
              </div>
                <div className="right">
                  <li><a href="/users/sign_in">Sign In</a></li>
                  <li><a href="/users/sign_up">Sign Up</a></li>
                </div>
            </ul>
          </header>
          <div className="content">
            { children }
          </div>
        </div>
      )
    }

  }
}

export default NavBar
