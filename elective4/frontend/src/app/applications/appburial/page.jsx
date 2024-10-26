import React from 'react'; 
import { AppBar, Toolbar, Typography, Button, Box, IconButton,TextField,FormLabel,RadioGroup 
  ,FormControlLabel ,Radio , 
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

const AppBurial = () => {
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
          <Typography variant="h5" sx={{ color: '#434445', marginBottom: '20px' }}>
            Burial Application
          </Typography>

          {/* Main Form Container */}
          <Box
            sx={{
              bgcolor: 'white',
              border: '1px solid #3d3b3b',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            {/* Left Side: Deceased Information */}
            <Box sx={{ flex: 1, paddingRight: '20px', borderRight: '2px solid #3d3b3b' }}>
              <Typography variant="h6" sx={{ color: '#01796F', marginBottom: '20px' }}>
                Deceased Information
              </Typography>

              {/* Full Name Inputs */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <TextField label="Last Name" variant="outlined" size="small" sx={{ width: '48%' }} />
                <TextField label="First Name" variant="outlined" size="small" sx={{ width: '48%' }} />
              </Box>

              {/* Gender Radio Group */}
              <FormLabel component="legend" sx={{ marginBottom: '10px' }}>
                Gender
              </FormLabel>
              <RadioGroup row sx={{ marginBottom: '16px' }}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>

              {/* Date of Birth and Date of Death Inputs */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <TextField
                  label="Date of Birth"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  sx={{ width: '48%' }}
                />
                <TextField
                  label="Date of Death"
                  variant="outlined"
                  type="datetime-local"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  sx={{ width: '48%' }}
                />
              </Box>

              {/* Cause of Death Input */}
              <TextField label="Cause of Death" variant="outlined" size="small" sx={{ width: '100%', marginBottom: '16px' }} />

              {/* Religion Input */}
              <TextField label="Religion" variant="outlined" size="small" sx={{ width: '100%', marginBottom: '16px' }} />

              {/* Attach Requirements Input */}
              <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
                Attach Requirements (e.g., Death Certificate)
              </Typography>
              <input type="file" accept="application/pdf,image/*" style={{ marginBottom: '16px' }} />
            </Box>

            {/* Right Side: Burial Details */}
            <Box sx={{ flex: 1, paddingLeft: '20px' }}>
              <Typography variant="h6" sx={{ marginBottom: '30px' }}>
                Burial Details
              </Typography>

              {/* Date of Burial */}
              <TextField
                label="Date of Burial"
                variant="outlined"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                size="small"
                sx={{ width: '100%', marginBottom: '16px' }}
              />

              {/* Time of Burial */}
              <TextField
                label="Time of Burial"
                variant="outlined"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                size="small"
                sx={{ width: '100%', marginBottom: '16px' }}
              />

              {/* Specific Instructions */}
              <TextField
                label="Specific Instructions"
                variant="outlined"
                size="small"
                sx={{ width: '100%', marginBottom: '16px' }}
                multiline
                rows={4}
              />

              {/* Buttons: Cancel and Submit */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
  variant="outlined"
  size="small"
  sx={{
    padding: '10px 30px',
    fontSize: '12px',
    borderColor: '#01796F', // Set the border color to #01796F
    color: '#01796F', // Set the text color to #01796F
    marginTop: '100px',

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
                  sx={{ padding: '10px 20px', fontSize: '12px', backgroundColor: '#01796F' ,  marginTop: '100px' }}
                >
                  Submit 
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>   
  );
};

export default AppBurial;
