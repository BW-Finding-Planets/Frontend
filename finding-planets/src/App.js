import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import FormikLoginForm from './components/Login';
import SignUp from './components/SignUp'
import AppPage from './components/AppPage'

function App() {
  const [newUser, setNewUser] = useState()

  console.log('newUser', newUser)

  return (
    <Router>
      <div className="App">
    <MenuAppBar />
    <Route exact path="/" component={FormikLoginForm} />
    
    <Route 
      exact path="/Sign_up"  
      render = {props => {
        console.log('props in render', props)
        return <SignUp history={props} setNewUser={setNewUser} />
        }}
    />
  	<Route path ="/AppPage" component = {AppPage} />

    </div>

     </Router>
  );
}

export default App;
