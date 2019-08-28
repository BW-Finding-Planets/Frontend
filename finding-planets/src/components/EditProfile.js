import React, {useEffect} from 'react';
import Axios from 'axios';

const EditProfile = (props) => {
    console.log('id',props.userId)

    useEffect(()=> {
        Axios
            .get(`https://finding-planets.herokuapp.com/users/${props.userId}`, {
                headers: {
                    Authorization: localStorage.getItem('token')}})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response))
    })

    return (
        <div></div>
    )
}

export default EditProfile;