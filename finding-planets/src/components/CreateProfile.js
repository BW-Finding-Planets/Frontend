import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { getUserData } from '../state/actions/index';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './CreateProfile.css';
import Button from '@material-ui/core/Button';
import './Login.css';

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
  error: {
    color: 'red',
    fontSize: '.8rem'

  }
})







function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const CreateProfile = props => {



  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: ''
  });

  const classes = useStyles();

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };


  const handleSubmit = e => {
    e.preventDefault();


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

        props.props.history.push('/AppPage');
      })
      .catch(err => console.log(err.response));
  };

  const prevUserName = usePrevious(props.username);

  useEffect(() => {
    props.getUserData(props.id).then(() => {
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

          <Button className={classes.btn} type="submit">{props.button}</Button>
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
