import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const EditProfile = (props) => {
    console.log('props in Edit Profile',props)
    const [updatedProfile, setUpdatedProfile] = useState({firstName:'', lastName:'', email:'',profession:''})

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
        <div>
            <form onSubmit ={handleSubmit}>
                <input 
                type="text"
                name="firstName"
                placeholder="First Name"
                value={updatedProfile.firstName}
                onChange={handleChange}
                />

                <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={updatedProfile.lastName}
                onChange={handleChange}
                />

                <input 
                type="text"
                name="email"
                placeholder="Email"
                value={updatedProfile.email}
                onChange={handleChange}
                />

                <input 
                type="text"
                name="profession"
                placeholder="Profession"
                value={updatedProfile.profession}
                onChange={handleChange}
                />
                
                <button type="submit" >Update</button>
            </form>
        </div>
    )
}

export default EditProfile;