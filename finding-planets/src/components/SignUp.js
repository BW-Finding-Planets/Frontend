import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik'
import * as Yup from "yup";
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './Login.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '300px'
  },
  media: {
    height: 200
  },
  btn: {
    background: 'orange'
  },
  error: {
    color: 'red',
    fontSize: '.7rem'
  }
});


const SignUp = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState([])

    useEffect(()=> {
        if(props.status) {
            setUser([...user, props.status])
        }
    })

    console.log(props)
    return (
        <div className = "container2">
        <Card className={classes.card}>
        <h2>SignUp</h2>


        <Form className = "formCon">
        <label>UserName</label>
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

                {/* <Field
                type="text"
                placeholder="password"
                name="passwordConfirm"
                />
                 {props.touched.passwordConfirm && props.errors.passwordConfirm && <p>{props.errors.passwordConfirm}</p>} */}

                <Button className={classes.btn} type= "submit"> Create</Button>
        </Form>
        </Card>
        </div>
    )
}

const FormikSignUp = withFormik({
    mapPropsToValues(values){
        return {
            username: values.username || '',
            password: values.password || '',
            // passwordConfirm: values.passwordConfirm || '',
            history: values.history || '',
        }
    },

    validationSchema: Yup.object().shape({
            username: Yup.string().required("A username is important to keep you validated"),
            password: Yup.string()
                                .required("A password is important, you can't miss")
                                .min(8, "Password  should be 8 characters minimum.")
                                .matches(/(^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.{8,}))/, "Password must contain at least one uppercase character and one special character"),
            // passwordConfirm: Yup.string().oneOf(
            //     [Yup.ref('password')],
            //     'Passwords do not match')
            }),

    handleSubmit(values, {setUser}){
        console.log(values)
        axios
            .post(`https://finding-planets.herokuapp.com/auth/register`, values)
            .then(res => {
                // setUser(res.data)
                console.log('user',res)
                values.history.push('/');

            })
            .catch(err => console.log(err))
    }
})(SignUp)

export default FormikSignUp;
