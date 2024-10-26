"use client"; // Declare the component as a Client Component

import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button, Typography, Box, Checkbox, FormControlLabel } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// SignInForm Component
const SignInForm = ({ onSubmit, username, setUsername, password, setPassword }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column', 
      width: '90%', 
      padding: '70px', 
    
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
      backgroundColor: 'white', // White background for the sign-in form
    }}>
      <Typography variant="h4" sx={{ marginBottom: '10px', color: '#01796F' ,fontFamily: 'Tahoma',}}>
        Login to your Account
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: '20px',fontSize: '0.95rem', color: '#00000' }}>
        Enter your details to Login
      </Typography>
      <InputLabel htmlFor="username" sx={{ fontSize: '15px',color: '#1f2120', marginBottom: '4px', alignSelf: 'flex-start' }}>Username</InputLabel>
      <Input
        id="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        sx={{ 
          fontSize: '16px', 
          padding: '6',
          border: '1px solid #01796F', 
          borderRadius: '4px', 
          mb: 0.5, 
          width: '100%', 
        }}
      />
      <InputLabel htmlFor="password" sx={{ fontSize: '15px', color: '#1f2120',  marginBottom: '4px', alignSelf: 'flex-start' }}>Password</InputLabel>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        sx={{ 
          fontSize: '16px', 
          padding: '6',
          border: '1px solid #01796F', 
          borderRadius: '4px', 
          mb: 0.5, 
          width: '100%', 
        }}
      />
       <FormControlLabel 
  control={<Checkbox sx={{ width: '40px', height: '20px' }} />} // Adjust checkbox size
  label = "Remember Me"
  sx={{ 
    fontSize: '2px',
    alignSelf: 'flex-start', 
    
    color: '#1f2120', 
    marginBottom: '50px' 
  }} 
/>
      <Button 
        type="submit" 
        variant="contained" 
        sx={{ 
          backgroundColor: '#01796F', 
          color: 'white', 
          fontSize: '13px', 
          borderRadius: '16px',
          padding: '8px 100px', 
          '&:hover': { 
            backgroundColor: '#015e55', 
          }
        }}
      >
        Sign In
      </Button>
      <Typography 
        variant="body2" 
        sx={{ marginTop: 0.8, color: 'blue', textAlign: 'center', cursor: 'pointer', fontSize: '0.75rem' }}
        onClick={() => alert('Forgot Password Clicked!')}
      >
        Forgot your password?
      </Typography>
    </Box>
  );
};

// Login Component
const Login = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <Box sx={{ 
      backgroundImage: 'url(/images/cemeteryback.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
    }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logoRIP.png" alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '8px' }} />
            <Typography variant="h5" component="div" sx={{ color: '#01796F', marginRight: '100px' ,fontFamily: 'Comic Sans MS' }}>
              Are Eye P
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: '#01796F', marginRight: '20px', fontSize: '0.98rem'}}>
              MEMORIALS
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: '#01796F', marginRight: '20px', fontSize: '0.98rem' }}>
              CEMETERY
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Button color="inherit" sx={{ color: '#01796F' }} onClick={toggleSignIn}>
              Sign In
            </Button>
            <Button color="inherit" sx={{ color: '#01796F' }} onClick={() => alert('Register clicked')}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: '110px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        {showSignIn && (
          <Box sx={{ 
            display: 'flex', 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            borderRadius: '8px', 
            overflow: 'hidden'
          }}>
            {/* Left Side - 30% */}
            <Box sx={{ 
              flexBasis: '30%', 
              backgroundColor: '#01796F', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              color: 'white',
              padding: '20px'
              
            }}>
              <img src="/images/FINALOGO.png" alt="Logo" style={{ width: '200px', height: 'auto', marginBottom: '0.1px' }} />

              <Typography variant="h5" sx={{ marginBottom: '20px', color: '#00000',fontFamily: 'Comic Sans MS' }}>
                Are Eye P</Typography>
               <Typography variant="h6" sx={{ marginBottom: '20px',fontSize: '1rem', color: '#00000' }}>
               Cemetery Management</Typography>
               </Box>

            {/* Right Side - 70% */}
            <Box sx={{ flexBasis: '70%' }}>
              <SignInForm 
                onSubmit={handleSubmit} 
                username={username} 
                setUsername={setUsername} 
                password={password} 
                setPassword={setPassword} 
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
