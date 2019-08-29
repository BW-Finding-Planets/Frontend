import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar';
import './MyProfile.css'



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
      paddingTop: '56.25%', // 16:9
      
    },
    btn:
    {
    marginTop: '30px',
    background: 'orange',
    // marginBottom: '30px',

    },
    error:{
      color: 'red',
      fontSize: '.7rem'

    }
})


const MyProfile = (props) => {
    console.log('props',props)
    const [displayProfile, setDisplayProfile] = useState({firstName:'', lastName:'', email:'', profession:''})
    const classes = useStyles();

    const id = props.userId

    console.log('id outside', id)
    useEffect(()=> {
        console.log('id inside', id)
        Axios
            .get(`https://finding-planets.herokuapp.com/users/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token')}})
            .then(res => {
                console.log('res in myprofile',res)
                setDisplayProfile(res.data)
                
            })
            .catch(err => console.log(err.response))
    }, [])

    return (
        <div className="container">
            <Card className={classes.card}>
                
                <h1>{displayProfile.firstName} Profile</h1>
                <div className="myProfile">
                    <img 
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
                        alt="User Profile" height="200" width="200"/>
                    <div className="user-info">
                        <p>Username: {displayProfile.username}</p>
                        <p>Name: {displayProfile.firstName} {displayProfile.lastName}</p>
                        <p>Email: {displayProfile.email}</p>
                        <p>Profession: {displayProfile.profession}</p>
                    </div>
                    <Button 
                        className={classes.btn}
                        onClick={
                        // ()=> props.history.push('/AppPage')
                        () => {if (displayProfile.firstName) {return props.history.push('/AppPage')} 
                        else {return props.history.push('/createprofile')}
                        }
                        }
                    >Next</Button>

                </div>
            </Card>
        </div>
    )
}

export default MyProfile;