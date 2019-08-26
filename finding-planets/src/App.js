import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import FormikLoginForm from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
    <MenuAppBar />
    <Route exact path="/" component={FormikLoginForm} />




      </div>
    </Router>
  );
}

export default App;
