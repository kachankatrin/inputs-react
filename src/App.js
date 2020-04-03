import React from 'react';
import {Link, Route, Switch } from 'react-router-dom';
import RegistrationForm from "./containers/RegistrationForm";
import BookingForm from './containers/BookingForm';
import Nav from './components/Nav'
import './App.css';

function App() {
    return (
      <>
        <Nav>
    
          <Link to='/'>RegistrationForm</Link>
          <Link to='/booking'>BookingForm</Link>
        </Nav>
        <Switch>
          <Route path='/' exact component={RegistrationForm}/>
          <Route path='/booking' component={BookingForm}/>
        </Switch>
      </>
    );
  }


export default App;
