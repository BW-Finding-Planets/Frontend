import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

import { getUserData } from '../state/actions/index';

const MyProfile = props => {
  console.log('props', props);
  const [displayProfile, setDisplayProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: ''
  });

  const id = props.userId;

  console.log('id outside', id);
  useEffect(() => {
    console.log('id inside', id);
    // Axios
    //     .get(`https://finding-planets.herokuapp.com/users/${props.userId}`, {
    //         headers: {
    //             Authorization: localStorage.getItem('token')}})
    //     .then(res => {
    //         console.log('res in myprofile',res)
    //         setDisplayProfile(res.data)
    //     })
    //     .catch(err => console.log(err.response))

    props.getUserData(props.userId);
  }, []);

  return (
    <div>
      <p>Username: {displayProfile.username}</p>
      <p>
        Name: {displayProfile.firstName} {displayProfile.lastName}
      </p>
      <p>Email: {displayProfile.email}</p>
      <p>Profession: {displayProfile.profession}</p>
    </div>
  );
};

export default connect(
  null,
  { getUserData }
)(MyProfile);

