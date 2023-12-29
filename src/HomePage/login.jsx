// Login.jsx
import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // You may want to add authentication checks and update the onLogin prop
    // For simplicity, we're just updating the parent component in this example
    onLogin(username);
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here based on the selected provider
    console.log(`Logging in with ${provider}`);
    onLogin();
    // Open link in a new tab
    if (provider === 'Google') {
      window.open('https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&service=accountsettings&ifkv=ASKXGp2mVvlKpDlZvk6MIjYHyEyhRmybabHijMXmQM3dv1gYO44D3xouX-W5CxQcUVs4gCUhZxi9tA&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin', '_blank');
    }
    if (provider === 'Facebook') {
      window.open('https://www.facebook.com/?stype=lo&deoia=1&jlou=AfeWJs063TjQTAUy-I34BReCjcL0XYZsLAnBGSLP-oe1d3g0jk1ISSfiIRX6_37d08i2rkRkWilYAl99Q4Q52UW6cIoFXBOejWxz4vXZJuOYtg&smuh=46958&lh=Ac_ruJhxtTiq3eVi1HY', '_blank');
    }
    if (provider === 'Twitter') {
      window.open('https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidmkifQ%3D%3D%22%7D', '_blank');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
        <div className="social-login-options">
          <button type="button" onClick={() => handleSocialLogin('Google')}>
            Log in with Google
          </button>
          <button type="button" onClick={() => handleSocialLogin('Facebook')}>
            Log in with Facebook
          </button>
          <button type="button" onClick={() => handleSocialLogin('Twitter')}>
            Log in with Twitter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
