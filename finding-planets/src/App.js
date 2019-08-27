import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/Login';
import SignUp from './components/SignUp'

function App() {
  return (
    
      <div className="App">
        
        <Route exact path="/login" component={FormikLoginForm} />
        <Route exact path="/signup" component={SignUp}  />



      </div>
    
  );
}

export default App;
