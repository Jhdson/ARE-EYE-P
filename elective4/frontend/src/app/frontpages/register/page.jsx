"use client"; // Declare the component as a Client Component 

import React, { useState } from 'react';
import { TextField, Button, Typography, Box, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// RegisterForm Component
const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registering:', { firstName, lastName, birthday, gender, email, username, password });
  };

  return (  
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        marginTop: '0px',
        marginBottom: '20px',
        flexDirection: 'column',
        width: '100%', // Full width
        padding: '40px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '10px', color: '#01796F',}}>
        Create a New Account
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: '20px', fontSize: '0.95rem', color: '#00000' }}>
        Fill in your details to create an account
      </Typography>

      {/* Name Fields */}
      <Grid container >
        <Grid item xs={6}>
          <TextField
            label="First Name"
            value={firstName}
            fullWidth={false} // Make sure it doesn't take full width
            size="small" // Use the small size
            sx={{ mb: 0.50, width: '230px' }} // Set a specific width
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
        label="Last Name"
      
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth={false} // Make sure it doesn't take full width
        size="small" // Use the small size
        sx={{ mb: 2, width: '230px', marginRight: '60px' }} // Set a specific width
          />
        </Grid>
      </Grid>


      {/* Birthday Field */}
      <TextField
        label="Birthday"
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        fullWidth={false} // Make sure it doesn't take full width
        InputLabelProps={{ shrink: true }}
        size="small" // Use the small size
        sx={{ mb: 2, width: '230px' }} // Set a specific width
/>


      {/* Gender Field */}
      <Typography sx={{ marginBottom: '4px', alignSelf: 'flex-start' }}>Gender</Typography>
      <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)} sx={{ mb: 2 }}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>

      {/* Email Field */}
      <TextField
        label="Email Address"
        type="email"
        value={email}
        fullWidth={false} // Make sure it doesn't take full width
        size="small" // Use the small size
        sx={{ mb: 2, width: '468px' }} // Set a specific width
      />

      {/* Username Field */}
      <TextField
        label="Username"
        value={username}
        fullWidth={false} // Make sure it doesn't take full width
        size="small" // Use the small size
        sx={{ mb: 2, width: '468px' }} // Set a specific width
      />

      {/* Password Field */}
      <TextField
        label="Password"
        type="password"
        value={password}
        fullWidth={false} // Make sure it doesn't take full width
        size="small" // Use the small size
        sx={{ mb: 5, width: '468px' }} // Set a specific width
      />
      
      <Button 
        variant="contained" 
        type="submit"
        sx={{ 
          backgroundColor: '#01796F', 
          color: 'white', 
          borderRadius: '25px',
          width: '450px',
          padding: '8px 15px', 
          '&:hover': { 
            backgroundColor: '#015e55', 
          }
        }}
      >
        Register
      </Button>
    </Box>
  );
};

// Login Component
const Login = () => {
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
            <Typography variant="h5" component="div" sx={{ color: '#01796F', marginRight: '100px', fontFamily: 'Comic Sans MS' }}>
              Are Eye P
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: '#01796F', marginRight: '20px', fontSize: '0.98rem' }}>
              MEMORIALS
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: '#01796F', marginRight: '20px', fontSize: '0.98rem' }}>
              CEMETERY
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Button color="inherit" sx={{ color: '#01796F' }}>
              Sign In
            </Button>
            <Button color="inherit" sx={{ color: '#01796F' }}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: '110px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ 
          display: 'flex', 
          width: '100%', 
          maxWidth: '800px', 
          height: 'auto', 
          borderRadius: '8px', 
          overflow: 'hidden'
        }}>
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
            <Typography variant="h5" sx={{ marginBottom: '20px', color: '#00000', fontFamily: 'Comic Sans MS' }}>
              Are Eye P
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '20px', fontSize: '1rem', color: '#00000' }}>
              Cemetery Management
            </Typography>
          </Box>

          <Box sx={{ flexBasis: '70%' }}>
            <RegisterForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
