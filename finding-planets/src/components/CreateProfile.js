import React,  {useState, useEffect} from 'react';
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



const CreateProfile = (props) => {
    console.log('props in createprofile', props)
    const [profile, setProfile] = useState(props.initialValue || {firstName:'', lastName:'', email:'',profession:''})
    const classes = useStyles();
   

    const handleChange = e => {
        setProfile({...profile, [e.target.name]: e.target.value})
    }

    // const profileId = props.userId

    const handleSubmit = e  => {
        e.preventDefault();
        console.log('profile', profile)

        Axios 
            .put(`https://finding-planets.herokuapp.com/users/${props.userId}`, profile, {
                headers: {
                    Authorization: localStorage.getItem('token')}})
            .then(res => {
                console.log('res in Create Profile',res)
                
                
            })
            .catch(err => console.log(err.response))

        // console.log('check props in handleSubmit', props)
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
                value={profile.firstName}
                onChange={handleChange}
                />

                <label>Last Name</label>
                <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={profile.lastName}
                onChange={handleChange}
                />
                
                <label>Email</label>
                <input 
                type="text"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
                />

                <label>Profession</label>
                <input 
                type="text"
                name="profession"
                placeholder="Profession"
                value={profile.profession}
                onChange={handleChange}
                />
                
                <Button className={classes.btn} type="submit" >Create Profile</Button>
            </form>
            {/* <button >Edit Profile</button> */}
            </Card>
        </div>
    )
}

export default CreateProfile;