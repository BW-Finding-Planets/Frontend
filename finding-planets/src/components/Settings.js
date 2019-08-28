import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';


function UserSettings() {
  const message = useSelector(state => state.message);

  return (
    <div className="dashBoard">
      <Container maxWidth="lg">
        <h1>{message}</h1>

        <div className="yourProfile" component="h2">
          Your Profile
        </div>
        <Paper>

        </Paper>
        <Paper>

        </Paper>
      </Container>
    </div>
  );
}

export default UserSettings;
