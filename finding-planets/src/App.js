import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import FormikLoginForm from './components/Login';
import SignUp from './components/SignUp'
import AppPage from './components/AppPage'

function App() {
  return (
    
    <Router>
    <div className="App">
    <MenuAppBar />
    <Route exact path="/" component={FormikLoginForm} />
    
    <Route exact path="/Sign_up" component={SignUp}  />
  	<Route path ="/AppPage" component = {AppPage} />

    </div>

     </Router>
  );
}

export default App;
