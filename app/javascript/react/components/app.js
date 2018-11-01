import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from '../containers/NavBar';
import HomePage from '../containers/HomePage';
import PickupScheduler from '../containers/PickupScheduler';


export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={HomePage} />
        <Route path='pickups' component={PickupScheduler} />
      </Route>
    </Router>
  )
}

export default App
