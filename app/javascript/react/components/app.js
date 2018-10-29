import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './NavBar';


export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={NavBar} />
      </Router>
    </div>
  )
}

export default App
