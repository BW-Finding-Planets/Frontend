import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import FormikLoginForm from './components/Login';
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <div className="App">
    <MenuAppBar />
    <Route exact path="/" component={FormikLoginForm} />
    <Route path ="/Sign_up" component = {SignUp} />


    </div>

     </Router>
  );
}

export default App;
