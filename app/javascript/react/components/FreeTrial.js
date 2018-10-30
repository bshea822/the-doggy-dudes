import React from 'react';
import { Link } from 'react-router';

const FreeTrial = (props) => {
  return(
    <div className="free-trial-component">
      <div className="grid-x">
        <div className="cell large-4 large-offset-1">
          <div className="free-trial-card">
            <div className="title text-center">
              <h4>Sign Up For A Free Trial!</h4>
            </div>
            <div className="grid-x">
              <div className="cell large-7 large-offset-1">
                <div className="description text-left">
                  <p>Let your dog experience one of our play groups!  You can sign up and get your first play group for free!</p>
                </div>
              </div>
            </div>
            <div className="grid-x align-right">
              <div className="cell large-4 large-offset-1">
                <Link to="/" className="button">Click Here!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
