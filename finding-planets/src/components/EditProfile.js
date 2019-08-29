import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './CreateProfile.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
      maxWidth: 500,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginTop: '220px',
      width: '400px',
    },
    media: {
      height: 200,
    },
    btn:
    {
    marginTop: '30px',
    background: 'orange',
    },
    error:{
      color: 'red',
      fontSize: '.7rem'

    }
})


const EditProfile = (props) => {
    console.log('props in Edit Profile',props)
    const [updatedProfile, setUpdatedProfile] = useState({firstName:'', lastName:'', email:'',profession:''})
    const classes = useStyles();

    useEffect(()=> {
        Axios
            .get(`https://finding-planets.herokuapp.com/users/${props.userId}`, {
                headers: {
                    Authorization: localStorage.getItem('token')}})
            .then(res => {
                console.log(res)
                setUpdatedProfile(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])

    const handleChange = e => {
       setUpdatedProfile({...updatedProfile, [e.target.name]: e.target.value})
    }

    

    const handleSubmit = e  => {
        e.preventDefault();
        console.log('updatedProfile', updatedProfile)
        
        Axios 
            .put(`https://finding-planets.herokuapp.com/users/${props.userId}`, updatedProfile, {
                headers: {
                    Authorization: localStorage.getItem('token')}})
            .then(res => {
                console.log('res in Edit Profile',res)
                
            })
            .catch(err => console.log(err.response))
        
        props.props.history.push("/myprofile")
    }

    return (
        <div className="container2">
             <Card className={classes.card}>
            <form className="formCon" onSubmit ={handleSubmit}>
                <label>First Name</label>
                <input 
                type="text"
                name="firstName"
                placeholder="First Name"
                value={updatedProfile.firstName}
                onChange={handleChange}
                />

                <label>Last Name</label>
                <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={updatedProfile.lastName}
                onChange={handleChange}
                />

                <label>Email</label>
                <input 
                type="text"
                name="email"
                placeholder="Email"
                value={updatedProfile.email}
                onChange={handleChange}
                />

                <label>Profession</label>
                <input 
                type="text"
                name="profession"
                placeholder="Profession"
                value={updatedProfile.profession}
                onChange={handleChange}
                />
                
                <Button className={classes.btn} type="submit" >Update Profile</Button>
            </form>
            </Card>
        </div>
    )
}

export default EditProfile;