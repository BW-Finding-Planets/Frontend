import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

import { getUserData } from '../state/actions/index';

const MyProfile = props => {
  console.log('props', props);
  // const [displayProfile, setDisplayProfile] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   profession: ''
  // });

  const id = props.userId;

  console.log('id outside', id);
  useEffect(() => {
    console.log('id inside', id);


    props.getUserData(props.userId);
  }, []);

  return (
    <div>
      <p>Username: {props.username}</p>
      <p>
        Name: {props.firstName} {props.lastName}
      </p>
      <p>Email: {props.email}</p>
      <p>Profession: {props.profession}</p>
    </div>
  );
};

const mapToProps = state => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        profession: state.profession,
        username: state.username,


    }
}

export default connect(
  mapToProps,
  { getUserData }
)(MyProfile);

