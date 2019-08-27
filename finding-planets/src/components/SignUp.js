import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik'
import * as Yup from "yup";
import axios from 'axios';

const SignUp = (props) => {
    const [user, setUser] = useState([])

    useEffect(()=> {
        if(props.status) {
            setUser([...user, props.status])
        }
    })

    console.log(props)
    return (
        <div className="sign-up">
        
            You are a new user?
            <Form>
                <Field 
                type="text" 
                placeholder="username"
                name="username"
                />
                {props.touched.username && props.errors.username && <p>{props.errors.username}</p>}

                <Field 
                type="text" 
                placeholder="password"
                name="password"
                />
                {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}

                <Field 
                type="text" 
                placeholder="password"
                name="passwordConfirm"
                />
                 {props.touched.passwordConfirm && props.errors.passwordConfirm && <p>{props.errors.passwordConfirm}</p>}

                <button>Register</button>
            </Form>
        
        </div>
    )
}

const FormikSignUp = withFormik({
    mapPropsToValues(values){
        return {
            username: values.username || '',
            password: values.password || '',
            // passwordConfirm: values.passwordConfirm || '',
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

    handleSubmit(values, {setUser}){
        console.log(values)
        axios
            .post(`https://finding-planets.herokuapp.com/auth/register`, values)
            .then(res => {
                // setUser(res.data)
                console.log('user',res)
            })
            .catch(err => console.log(err))
    }
})(SignUp)

export default FormikSignUp;
