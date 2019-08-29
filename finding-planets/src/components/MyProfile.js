import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar';
import './MyProfile.css';
import { connect } from 'react-redux';

import { getUserData } from '../state/actions/index';

import './MyProfile.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '220px',
    width: '400px'
  },
  media: {
    height: 200,
    paddingTop: '56.25%' // 16:9
  },
  btn: {
    marginTop: '30px',
    background: 'orange'
    // marginBottom: '30px',
  },
  error: {
    color: 'red',
    fontSize: '.7rem'
  }
});

const MyProfile = props => {
  const classes = useStyles();
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
    <div className="container">
      <Card className={classes.card}>
        <h1>{props.firstName} Profile</h1>
        <div className="myProfile">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="User Profile"
            height="200"
            width="200"
          />
          <div className="user-info">
            <p>Username: {props.username}</p>
            <p>
              Name: {props.firstName} {props.lastName}
            </p>
            <p>Email: {props.email}</p>
            <p>Profession: {props.profession}</p>
          </div>
          <Button
            className={classes.btn}
            onClick={() => {
              // ()=> props.history.push('/AppPage')
              // () => {if (props.firstName) {return props.history.push('/AppPage')}
              // else {return props.history.push('/createprofile')}
              props.history.push('/editprofile');
            }}
          >
            Edit
          </Button>
        </div>
      </Card>
    </div>
  );
};

const mapToProps = state => {
  return {
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
)(MyProfile);
