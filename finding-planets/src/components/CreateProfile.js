import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import MyProfile from './MyProfile'

const CreateProfile = (props) => {
    console.log('props in createprofile', props)
    const [profile, setProfile] = useState(props.initialValue || {firstName:'', lastName:'', email:'',profession:''})
    
   

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
        <div>
            <form onSubmit ={handleSubmit}>
                <input 
                type="text"
                name="firstName"
                placeholder="First Name"
                value={profile.firstName}
                onChange={handleChange}
                />

                <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={profile.lastName}
                onChange={handleChange}
                />

                <input 
                type="text"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
                />

                <input 
                type="text"
                name="profession"
                placeholder="Profession"
                value={profile.profession}
                onChange={handleChange}
                />
                
                <button type="submit" >Create Profile</button>
            </form>
            {/* <button >Edit Profile</button> */}
        </div>
    )
}

export default CreateProfile;