import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import FormikLoginForm from './components/Login';
import SignUp from './components/SignUp'
import AppPage from './components/AppPage'
import CreateProfile from './components/CreateProfile'
import EditProfile from './components/EditProfile'
import MyProfile from './components/MyProfile'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [userId, setUserId] = useState()

  console.log('id', userId)
  

  return (
    <Router>
      <div className="App">
    <MenuAppBar />
    
    <Route 
      exact path="/" 
      render = {props => {
        return <FormikLoginForm  history={props} setUserId={setUserId} />
        }}
    />
    
    <Route 
      exact path="/Sign_up"  
      render = {props => {
        console.log('props in render', props)
        return <SignUp history={props} setUserId={setUserId} />
        }}
    />
    
    <Route 
      path ="/createprofile" 
      render = {props=> {
        return <CreateProfile props={props} userId={userId}/>
      }}   
    />

    {/* <Route 
      path ="/myprofile/edit" 
      render = {props=> {
        return <EditProfile userId={userId}/>
      }}   
    /> */}
    
    <PrivateRoute path="/myprofile" component={MyProfile}/>

    <Route path ="/AppPage" component = {AppPage} />

    </div>

     </Router>
  );
}

export default App;
