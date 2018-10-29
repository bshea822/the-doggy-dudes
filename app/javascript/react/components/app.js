import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from '../containers/NavBar';
import SlideContainer from '../containers/SlideContainer';


export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={SlideContainer} />
      </Route>
    </Router>
  )
}

export default App
