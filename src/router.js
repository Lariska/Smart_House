import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import AddRoom from './components/AddRoom';
import Room from './components/Room';

export default function Routes() {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/addroom">
              <AddRoom />
            </Route>
            <Route path="/room">
              <Room/>
            </Route>
          </Switch>
      </Router>
    );
}