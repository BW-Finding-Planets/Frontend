import React, { useState } from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './CreateProfile.css';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getUserData } from '../state/actions/index';
import './CreateProfile.css';

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

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

const EditProfile = props => {
  const [updatedProfile, setUpdatedProfile] = useState({
    firstName: props.firstName || '',
    lastName: props.lastName ||'',
    email: props.email || '',
    profession: props.profession || ''
  });

  const classes = useStyles();
  console.log("EditProfile", props.username)

  // const prevUserName = usePrevious(props.username);

  // useEffect(() => {
  //   props.getUserData(props.id).then(() => {});
  // }, []);
  //
  //
  //
  // useEffect(() => {
  //   if (prevUserName === '' && prevUserName !== props.username) {
  //     setUpdatedProfile({
  //       firstName: props.firstName || '',
  //       lastName: props.lastName || '',
  //       email: props.email || '',
  //       profession: props.profession || ''
  //     });
  //   }
  // }, [props.username]);



  const handleChange = e => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    Axios.put(
      `https://finding-planets.herokuapp.com/users/${props.id}`,
      updatedProfile,
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    )
      .then(res => {
        props.props.history.push('/myprofile');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="container2">
      <Card className={classes.card}>
        <form className="formCon" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={updatedProfile.firstName}
            onChange={handleChange}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={updatedProfile.lastName}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={updatedProfile.email}
            onChange={handleChange}
          />

          <label>Profession</label>
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={updatedProfile.profession}
            onChange={handleChange}
          />

          <Button className={classes.btn} type="submit">
            Update Profile
          </Button>
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
)(EditProfile);
