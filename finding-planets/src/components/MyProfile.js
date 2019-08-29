import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const MyProfile = (props) => {
    console.log('props',props)
    const [displayProfile, setDisplayProfile] = useState({firstName:'', lastName:'', email:'', profession:''})

    const id = props.userId

    console.log('id outside', id)
    useEffect(()=> {
        console.log('id inside', id)
        Axios
            .get(`https://finding-planets.herokuapp.com/users/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token')}})
            .then(res => {
                console.log('res in myprofile',res)
                setDisplayProfile(res.data)
                
            })
            .catch(err => console.log(err.response))
    }, [])

    return (
        <div>
            <p>Username: {displayProfile.username}</p>
            <p>Name: {displayProfile.firstName} {displayProfile.lastName}</p>
            <p>Email: {displayProfile.email}</p>
            <p>Profession: {displayProfile.profession}</p>
            <button onClick={
                // ()=> props.history.push('/AppPage')
                () => {if (displayProfile.firstName) {return props.history.push('/AppPage')} 
                else {return props.history.push('/createprofile')}
                }
                }
                >Next</button>
        </div>
    )
}

export default MyProfile;