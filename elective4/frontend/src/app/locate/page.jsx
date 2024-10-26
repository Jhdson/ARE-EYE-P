"use client"; // Declare the component as a Client Component

import React from 'react'; 
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Paper, TextField, Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import UpdateIcon from '@mui/icons-material/Update';
import PaymentIcon from '@mui/icons-material/Payment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


const Locate = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Static Side Panel */}
      <Box
        sx={{
          width: '450px',
          height: '100vh',
          backgroundColor: '#ebebed',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
        }}
      >
        {/* Logo and Title Side by Side */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <img
            src="/images/FINALOGO.png"
            alt="Logo"
            style={{
              width: '50px',
              height: 'auto',
              marginRight: '10px',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontSize: '22px',
              color: '#01796F',
              fontFamily: 'Comic Sans MS',
            }}
          >
            Are Eye P
          </Typography>
        </Box>

        {/* Full-width Line Separator */}
        <Box sx={{ borderBottom: '2px solid #01796F', marginBottom: '20px' }} />

        {/* Side Panel Buttons with Icons */}
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <DashboardIcon sx={{ marginRight: '8px' }} />
          Dashboard
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <PeopleIcon sx={{ marginRight: '8px' }} />
          Relatives
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <AssignmentIcon sx={{ marginRight: '8px' }} />
          Application Burial
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <RequestQuoteIcon sx={{ marginRight: '8px' }} />
          Service Request
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <UpdateIcon sx={{ marginRight: '8px' }} />
          Renewal
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <PaymentIcon sx={{ marginRight: '8px' }} />
          Payment
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <SettingsIcon sx={{ marginRight: '8px' }} />
          Settings
        </Button>

        {/* Sign Out Button */}
        <Button
          sx={{
            justifyContent: 'flex-start',
            width: '90%',
            color: 'white',
            backgroundColor: '#01796F',
            marginTop: 'auto',
            marginBottom: '16px',
          }}
        >
          <ExitToAppIcon sx={{ marginRight: '8px' }} />
          Sign Out
        </Button>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#01796F' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Home Button and Change Password TextButton */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button sx={{ color: 'white', fontSize: '13px' }}>
                <HomeIcon sx={{ marginRight: '4px' }} /> Home
              </Button>
              <Button sx={{ color: 'white', marginLeft: '10px', fontSize: '13px' }}>
                <VpnKeyIcon sx={{ marginRight: '4px' }} /> Change Password
              </Button>
            </Box>

         
            <Button sx={{ color: 'white', marginLeft: '10px', fontSize: '13px' }}>
                <PersonIcon sx={{ marginRight: '4px' }} /> Jay Hudson Ybarra
              </Button>
          </Toolbar>
        </AppBar>


  {/* Main Form Container */}
  <Box sx={{ padding: '20px', backgroundColor: 'white' }}>
    <Typography variant="h5" sx={{ color: '#434445', marginBottom: '20px' }}>
      Locate Relative
    </Typography>

    <Paper
      sx={{
        border: '1px solid black',
        borderRadius: '11px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row', // Ensure elements are laid out in a row
        gap: '10px', // Space between left and right boxes
      }}
    >
      {/* Left Box: Temporary Picture */}
      <Box sx={{ flex: '1', padding: '20px', border: '1px solid #ccc', borderRadius: '12px' }}>
        {/* Replace the src with your actual image source */}
        <img
          src="/images/mappingcemetery.png"
          alt="Temporary"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>

      {/* Right Side: 2nd and 3rd Boxes */}
      <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* 2nd Box: Search Relative Located */}
        <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '12px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Search Relative Located
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TextField
              label="Deceased Name/ID"
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1 }}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          <Button variant="contained" sx={{ backgroundColor: '#01796F', color: 'white' }}>
  Locate
</Button>
          </Box>
        </Box>

        {/* 3rd Box: Deceased Information */}
        <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '12px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Deceased Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Name" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="ID" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Catacomb ID" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Catacomb Number" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Block Number" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Street Number" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Location Catacomb" variant="outlined" size="small" fullWidth />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  </Box>
</Box>
</Box>

  );
};

export default Locate;
