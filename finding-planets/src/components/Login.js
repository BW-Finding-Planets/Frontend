import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { storeUserId, isLoggedIn } from '../state/actions/index';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
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
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    margin: '20px 10px',
    background: 'orange'
  },
  error: {
    color: 'red',
    fontSize: '.9rem'
  }
});
const LoginForm = (props, { status }) => {
  const classes = useStyles();

  return (
    <>
      <div className="container2">
        <Card className={classes.card}>
          <h2>Login Page</h2>
          <Form className="formCon">
            <label>Username</label>
            <Field type="text" name="username" placeholder="Enter your username" />
            {props.touched.username && props.errors.username && (
              <p1 className={classes.error}>{props.errors.username}</p1>
            )}
            <label>Password</label>
            <Field type="password" name="password" placeholder="Enter your password" />
            {props.touched.password && props.errors.password && (
              <p1 className={classes.error}>{props.errors.password}</p1>
            )}
            <div className={classes.buttons}>
            <Button className={classes.btn} type="submit">
              Login
            </Button>
            <Button
              className={classes.btn}
              onClick={() => props.history.history.push('/Sign_Up')}
            >
              Register
            </Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    newUser: state.newUser
  };
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, history }) {
    return {
      username: username || '',
      password: password || '',
      history: history || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Enter a password')
  }),
  handleSubmit(values, { props, setStatus }) {
    console.log('Submit', values);
    delete values.history;
    axios
      .post('https://finding-planets.herokuapp.com/auth/login', values)
      .then(res => {
        console.log('res', res);
        localStorage.setItem('token', res.data.token);

        props.setUserId(res.data.id);
        setStatus(res.data.id);
        props.storeUserId(res.data.id);
        props.isLoggedIn(true);
      })
      .then(res => {
        if (props.newUser === true) {
          props.history.history.push('/createprofile');
        } else {
          props.history.history.push('./AppPage');
        }
      })

      .catch(err => console.log(err));
  }
})(LoginForm);

export default connect(
  mapStateToProps,
  { storeUserId, isLoggedIn }
)(FormikLoginForm);
