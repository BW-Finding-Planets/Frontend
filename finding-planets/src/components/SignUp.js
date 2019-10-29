import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Signup.css';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import { isNewUser } from '../state/actions/index';

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
    fontSize: '.9rem'
  }
});

const SignUp = props => {

  const classes = useStyles();

  return (
    <>
      <div className="container2">
        <Card className={classes.card}>
          <h2>Register to discover planets</h2>

          <Form className="formCon">
            <label>Username</label>
            <Field type="text" placeholder="username" name="username" />
            {props.touched.username && props.errors.username && (
              <p1 className={classes.error}>{props.errors.username}</p1>
            )}

            <label>Password</label>
            <Field type="password" placeholder="password" name="password" />
            {props.touched.password && props.errors.password && (
              <p1 className={classes.error}>{props.errors.password}</p1>
            )}

            <label>Confirm Password</label>
            <Field type="password" placeholder="password" name="passwordConfirm" />
            {props.touched.passwordConfirm && props.errors.passwordConfirm && (
              <p1 className={classes.error}>{props.errors.passwordConfirm}</p1>
            )}

            <Button className={classes.btn} type="submit">
              Register
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
};

const FormikSignUp = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || '',
      password: values.password || '',
      passwordConfirm: values.passwordConfirm || '',
      history: values.history || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(
      'Please enter a username'
    ),
    password: Yup.string()
      .required("Please enter a password"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords do not match'
    )
  }),

  handleSubmit(values, { props }) {
    console.log('checkkkk', props);
    delete values.passwordConfirm;
    delete values.history;

    console.log('values in handleSubmit', values);
    axios
      .post(`https://finding-planets.herokuapp.com/auth/register`, values)
      .then(res => {
        const id = res.data.id;
        console.log('user', res);

        props.setUserId(id);
      })
      .then(() => {
        props.isNewUser(true);
        props.history.history.push('/');
      })
      .catch(err => console.log('here', err));
  }
})(SignUp);

export default connect(
  null,
  { isNewUser }
)(FormikSignUp);
