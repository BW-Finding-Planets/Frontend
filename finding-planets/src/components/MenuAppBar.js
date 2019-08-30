import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
// import {stringify} from 'jest-matcher-utils';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

import { isLoggedIn, isNewUser } from '../state/actions/index';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const MenuAppBar = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  console.log('MenuAppBar Bool ', props);

  return (
    <div className={classes.root}>
      <FormGroup>
        {/* <FormControlLabel */}
        {/*   control={ */}
        {/*     <Switch */}
        {/*       checked={auth} */}
        {/*       onChange={handleChange} */}
        {/*       aria-label="login switch" */}
        {/*     /> */}
        {/*   } */}
        {/*   label={auth ? 'Logout' : 'Login'} */}
        {/* /> */}
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton */}
          {/*   edge="start" */}
          {/*   className={classes.menuButton} */}
          {/*   color="inherit" */}
          {/*   aria-label="menu" */}
          {/* > */}
          {/*   <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Favicon
          </Typography>
          {props.loggedIn === true ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/myprofile">
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                </Link>
                <Link to="/AppPage">
                  <MenuItem onClick={handleClose}>
                    Start Finding Planets
                  </MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem
                    onClick={() => {
                      props.isLoggedIn(false);
                      props.isNewUser(false);
                    }}
                  >
                    LogOut
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>
                  <a href="https://www.cfa.harvard.edu/~avanderb/tutorial/tutorial.html " target = "_blank">Learn how to read a light curve</a>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { isLoggedIn, isNewUser }
)(MenuAppBar);
