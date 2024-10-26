import React from 'react'; 
import { AppBar, Toolbar, Typography, Button, Box, IconButton, TextField, FormLabel, RadioGroup,
    Paper, FormControlLabel, Radio, MenuItem
 } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import UpdateIcon from '@mui/icons-material/Update';
import PaymentIcon from '@mui/icons-material/Payment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleIcon from '@mui/icons-material/People'; // Import Relatives icon
import SettingsIcon from '@mui/icons-material/Settings'; // Import Settings icon
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon
import VpnKeyIcon from '@mui/icons-material/VpnKey'; // Import Change Password icon
import PersonIcon from '@mui/icons-material/Person';

const Serviceform = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Static Side Panel */}
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#ebebed',
          color: '#01796F',
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
            style={{ width: '50px', height: 'auto', marginRight: '10px' }}
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
          Application burials
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <RequestQuoteIcon sx={{ marginRight: '8px' }} />
          Service requests
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <UpdateIcon sx={{ marginRight: '8px' }} />
          Renewals
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <PaymentIcon sx={{ marginRight: '8px' }} />
          Payments
        </Button>
        
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <NotificationsIcon sx={{ marginRight: '8px' }} />
          Notifications
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
            marginTop: 'auto', // Push the sign-out button to the bottom
            marginBottom: '16px',
          }}
        >
          <ExitToAppIcon sx={{ marginRight: '8px' }} />
          Sign out
        </Button>
      </Box>

      {/* AppBar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#01796F' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Home Button and Change Password TextButton */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button sx={{ color: 'white', fontSize: '13px' }}>
                <HomeIcon sx={{ marginRight: '4px' }} /> Home
              </Button>
              <Button sx={{ color: 'white', marginLeft: '10px', fontSize: '13px' }}>
                <VpnKeyIcon sx={{ marginRight: '4px' }} /> Change password
              </Button>
            </Box>

            <Button sx={{ color: 'white', marginLeft: '10px', fontSize: '13px' }}>
                <PersonIcon sx={{ marginRight: '4px' }} /> Jay Hudson Ybarra
              </Button>
          </Toolbar>
        </AppBar>
        

       
         {/* Main Content Area */}
         <Box sx={{ padding: '20px', backgroundColor: 'white' }}>
          <Typography variant="h5" sx={{ color: '#434445', marginBottom: '10px' }}>
            Service Request
          </Typography>

           {/* Main Content Area */}
           <Box sx={{ flexGrow: 1, display: 'flex', padding: '5px' , flexDirection: 'column', marginRight: '30px' }}>
           {/* Service Offerings Area */}
          <Paper
            sx={{
              padding: '20px',
              borderRadius: '12px',
              
              backgroundColor: '#ffffff',
              boxShadow: 3,
              border: '1px solid #3d3b3b',
              width: '90%', // Full width
              gap: '10px',
            }}
          >
           

            <Typography variant="h6" sx={{color: '#01796F', fontSize: '18px', marginBottom: '20px' }}>
              Service Offerings
            </Typography>

            {/* Service Information Form */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Service Type Selection */}
              <TextField
                label="Service Type"
                variant="outlined"
                select
                size="small"
                sx={{ width: '40%', marginBottom: '16px' }}
              >
                <MenuItem value="cleaning">Cleaning of Tombstones  Php 1,000</MenuItem>
                <MenuItem value="restoration">Tombstone Restoration Php 2,000</MenuItem>
                <MenuItem value="painting">Painting or Polishing  Php 1,000</MenuItem>
                <MenuItem value="installation">Installation Services  Php 3,000</MenuItem>
                <MenuItem value="maintenance">Maintenance Services  Php 5,000</MenuItem>
              </TextField>

              {/* Catacomb ID */}
              <TextField
                label="Catacomb ID"
                variant="outlined"
                size="small"
                sx={{ width: '30%' }}
              />

              {/* Date and Time of Service */}
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <TextField
                  label="Date of Service"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  sx={{ width: '32%' }}
                />
                <TextField
                  label="Time of Service"
                  variant="outlined"
                  type="time"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  sx={{ width: '32%' }}
                />
              </Box>

              {/* Urgency Level Radio Group */}
              <FormLabel component="legend" sx={{ marginBottom: '8px' }}>
                Urgency Level
              </FormLabel>
              <RadioGroup row sx={{ marginBottom: '16px' }}>
                <FormControlLabel value="low" control={<Radio />} label="Low" />
                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                <FormControlLabel value="high" control={<Radio />} label="High" />
              </RadioGroup>

              {/* Additional Notes */}
              <TextField
                label="Additional Notes"
                variant="outlined"
                multiline
                rows={4}
                sx={{ width: '70%' }}
              />

             {/* Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 , marginBottom : '30px', marginRight : '10px'}}>
          <Button
  variant="outlined"
  size="small"
  sx={{
    padding: '10px 30px',
    fontSize: '12px',
    borderColor: '#01796F', // Set the border color to #01796F
    color: '#01796F', // Set the text color to #01796F
    marginTop: '10px',
    marginBottom: '50px',
    '&:hover': {
      borderColor: '#0f7a65', // Optional: Change border color on hover
      backgroundColor: '#e0f2f1', // Optional: Change background color on hover
    },
  }}
>
  Cancel
</Button>

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ padding: '10px 30px', fontSize: '12px', backgroundColor: '#01796F' ,  marginTop: '10px', marginBottom : '50px' }}
                  >
                    Submit
                  </Button>
                
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
    </Box>

  );
};

export default Serviceform;
