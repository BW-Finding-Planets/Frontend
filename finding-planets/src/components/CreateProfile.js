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

import './Login.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '300px',
    width: '400px'
  },
  media: {
    height: 200
  },
  btn: {
    marginTop: '30px',
    background: 'orange'
  },
  error: {
    color: 'red',
    fontSize: '.7rem'
  }
});

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const CreateProfile = props => {
  console.log('render ++++===================');
  console.log('props in createprofile', props.firstName);

  const [profile, setProfile] = useState({
    firstName: props.firstName || '',
    lastName: props.lastName || '',
    email: props.email || '',
    profession: props.profession || ''
  });

  const classes = useStyles();

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // const profileId = props.userId

  const handleSubmit = e => {
    e.preventDefault();
    console.log('profile', props.id);

    Axios.put(
      `https://finding-planets.herokuapp.com/users/${props.id}`,
      profile,
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    )
      .then(res => {
        console.log(res);
        props.props.history.push('/myprofile');
      })
      .catch(err => console.log(err.response));
  };

  const prevUserName = usePrevious(props.username);

  useEffect(() => {
    props.getUserData(props.id).then(() => {
      console.log('User Data Props', props);
    });
  }, []);

  useEffect(() => {
    if (prevUserName === '' && prevUserName !== props.username) {
      setProfile({
        firstName: props.firstName || '',
        lastName: props.lastName || '',
        email: props.email || '',
        profession: props.profession || ''
      });
    }
  }, [props.username]);

  return (
    <div className="container2">
      <Card className={classes.card}>

        <label>First Name</label>

        <form onSubmit={handleSubmit}>
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

          <Button type="submit">{props.button}</Button>
        </form>
      </Card>
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
)(CreateProfile);
