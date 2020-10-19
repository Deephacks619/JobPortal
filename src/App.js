import React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import JobSeekerPage from './components/JobSeekerPage';
import Register from './components/Register';
import Homepage from './components/HomePage';
import JobDetails from './components/JobDetails';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/JobSeekerPage" component={JobSeekerPage}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
            <Route path="/JobDetails/:index/" component={JobDetails}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

