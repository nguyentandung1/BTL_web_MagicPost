import React, { useState } from 'react';
import './HeadBar.css';
import Login from './login';
import { Grid, Button} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

function HeadBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username) => {
    // Perform login logic and update the isLoggedIn state
    setIsLoggedIn(true);
    console.log(`User ${username} logged in`);
  };

  return (
    <div id="head-bar">
      <Grid container>
        <Grid item md={2} sm={false} xs={false}></Grid>
        <Grid item md={6} sm={7} xs={12}>
          <pre id="hotline">Hotline: <b>1900 8095</b> 8:00 - 20:00, Thứ 2 - Chủ Nhật</pre>
        </Grid>
        <Grid item md={3} sm={4} xs={5}>
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            // Display other components or user information for the logged-in state
            <div className="logged-in-container">
              <span className="logged-in-message">Welcome, User!</span>
            </div>
          )}
        </Grid>
        {/* <Grid item md={1} sm={1} xs={3}>
          <Button
            id="login-button"
            variant="contained"
            color="secondary"
            startIcon={<PersonIcon />}
            size="small"
            onClick={() => handleLogin('demoUser')} 
          >
            Đăng nhập/Đăng ký
          </Button>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default HeadBar;
