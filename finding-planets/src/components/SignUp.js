import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik'
import * as Yup from "yup";
import axios from 'axios';
import './Signup.css';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar';
import { Link } from 'react-router-dom';

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
    error:{
      color: 'red',
      fontSize: '.7rem'

    }
})


const SignUp = (props) => {
    const [user, setUser] = useState({username: '', password: ''})
    const classes = useStyles();


    console.log('check values',props.values)



    // useEffect(()=> {
    //     if(props.status) {
    //         setUser([...user, props.status])
    //     }
    // })

    console.log(props)
    return (
        <>

        <Link className="check-user" to="/login">
            <p>Already a user?</p>
        </Link>

        <div className="container2">
            <Card className={classes.card}>
                <h2>Register to discover planets</h2>

                <Form className="formCon">
                    <label>Username</label>
                    <Field
                    type="text"
                    placeholder="username"
                    name="username"
                    />
                    {props.touched.username && props.errors.username && <p className={classes.error}>{props.errors.username}</p>}

                    <label>Password</label>
                    <Field
                    type="text"
                    placeholder="password"
                    name="password"
                    />
                    {props.touched.password && props.errors.password && <p className={classes.error}>{props.errors.password}</p>}

                    <label>Confirm Password</label>
                    <Field
                    type="text"
                    placeholder="password"
                    name="passwordConfirm"
                    />
                    {props.touched.passwordConfirm && props.errors.passwordConfirm && <p className={classes.error}>{props.errors.passwordConfirm}</p>}

                    <Button className={classes.btn} type="submit">Register</Button>
                </Form>

            </Card>
        </div>
        </>
    )
}

const FormikSignUp = withFormik({

    mapPropsToValues(values){

        return {
            username: values.username || '',
            password: values.password || '',
            passwordConfirm: values.passwordConfirm || '',
            history: values.history || ''
        }
    },

    validationSchema: Yup.object().shape({
            username: Yup.string().required("A username is important to keep you validated"),
            password: Yup.string()
                                .required("A password is important, you can't miss")
                                .min(8, "Password  should be 8 characters minimum.")
                                .matches(/(^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.{8,}))/, "Password must contain at least one uppercase character and one special character"),
            passwordConfirm: Yup.string().oneOf(
            [Yup.ref('password')],
            'Passwords do not match')
            }),



    handleSubmit(values, {props}){
        console.log('checkkkk',props)
        delete values.passwordConfirm
        delete values.history
        console.log('values in handleSubmit',values)
            axios
            .post(`https://finding-planets.herokuapp.com/auth/register`, values)
            .then(res => {

                console.log('user',res)

            })
            .catch(err => console.log('here', err))
        props.history.push("/")
    }
})(SignUp)

export default FormikSignUp;
