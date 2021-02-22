import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Signin from './container/signin';
import Signup from './container/signup';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
