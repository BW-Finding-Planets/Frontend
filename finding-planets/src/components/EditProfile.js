import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { getUserData } from '../state/actions/index';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const EditProfile = props => {
  console.log('props in Edit Profile', props);
  const [updatedProfile, setUpdatedProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: ''
  });

  useEffect(() => {
    props.getUserData(props.id).then(() => {});
  }, []);

  const prevUserName = usePrevious(props.username);

  useEffect(() => {
    if (prevUserName === '' && prevUserName !== props.username) {
      setUpdatedProfile({
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        email: props.email || '',
        profession: props.profession || ''
      });
    }
  }, [props.username]);

  const handleChange = e => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('updatedProfile', updatedProfile);

    Axios.put(
      `https://finding-planets.herokuapp.com/users/${props.userId}`,
      updatedProfile,
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    )
      .then(res => {
        console.log('res in Edit Profile', res);
      })
      .catch(err => console.log(err.response));

    props.props.history.push('/myprofile');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

const mapToProps = state => {
  return {
    id: state.id,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    profession: state.profession,
    username: state.username
  };
};
export default connect(
  mapToProps,
  { getUserData }
)(EditProfile);

