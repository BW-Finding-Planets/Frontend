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
import Axios from 'axios'

function App() {
  const [userId, setUserId] = useState()
  const [userList,setUserList] = useState([])

  console.log('id', userId)

  const getUsers = () => {
        Axios
          .get(`https://finding-planets.herokuapp.com/users`, {
              headers: {
                  Authorization: localStorage.getItem('token')}})
          .then(res => {
              console.log('list of users',res)
              setUserList(res.data)
              
          })
          .catch(err => console.log(err.response))
 } 

  return (
    <Router>
      <div className="App">
    <MenuAppBar />
    
    <Route 
      exact path="/" 
      render = {props => {
        return <FormikLoginForm  history={props} setUserId={setUserId} getUsers={getUsers} />
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
        console.log('props in render', props)
        const initialValue=userList.find(user => user.id == userId)
        return <CreateProfile props={props} userId={userId} initialValue={initialValue}/>
      }}   
    />

    <Route 
      path ="/editprofile" 
      render = {props=> {
        console.log('props in render', props)
        const initialValue=userList.find(user => user.id == userId)
        return <EditProfile props={props} userId={userId} initialValue={initialValue}/>
      }}   
    />

    
    <PrivateRoute path="/myprofile" component={MyProfile} userId={userId}/>

    <Route path ="/AppPage" component = {AppPage} />

    </div>

     </Router>
  );
}

export default App;
