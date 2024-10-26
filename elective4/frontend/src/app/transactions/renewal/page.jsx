  import React from 'react';
  import { AppBar, Toolbar, Typography, Button, Box, IconButton, TextField, FormLabel, RadioGroup,
      Paper, FormControlLabel, Radio, MenuItem, FormGroup, Checkbox, FormControl
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
  import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Import Payment icon
  import PersonIcon from '@mui/icons-material/Person';


  const RenewalForm = () => {
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
              Renewal
            </Typography>

          {/* Main Content Area */}
          <Box sx={{  border: '1px solid black' , borderRadius: '12px' , padding: '10px', display: 'flex', justifyContent: 'start',  width: '100%' }}>
        <Paper sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px' , width: '100%',   }}>
          {/* 1st Box: Applicant Information */}
          <Box sx={{ border: '1px solid #ccc', borderRadius: '12px'  , padding: '20px', marginBottom: '1  0px',  width: '100%' }}>
            <Typography variant="h6" sx={{  marginBottom: '10px', color : '#01796F' }}>
              Applicant Information
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px',  marginBottom: '10px' }}>
              <TextField label="Last Name"variant="outlined" size="small" sx={{ width: '48%' }}/>
              <TextField label="First Name" variant="outlined" size="small" sx={{ width: '48%' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
            <TextField label="Address" variant="outlined" size="small" sx={{ width: '98%', marginBottom: '5px'  }} />
            <TextField label="Contact Information" variant="outlined" size="small" sx={{ width: '98%' }} />
          </Box>
          </Box>

          {/* 2nd Box: Renewal For */}
          <Box sx={{ border: '1px solid #ccc', borderRadius: '12px', padding: '12px', marginBottom: '10px' , width: '100%' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px', color : '#01796F' }}>
              Renewal For
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px',  marginBottom: '10px' }}>
              <TextField label="Deceased Name" variant="outlined" size="small" sx={{ width: '48%' }} />
              <TextField label="Deceased ID" variant="outlined" size="small" sx={{ width: '48%' }} />
            </Box>
            <Typography variant="h6" sx={{ marginTop: '10px', marginBottom: '10px' , color : '#01796F' }}>
              Current Services Details
            </Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px'}}>
    <TextField label="ID" variant="outlined" size="small" sx={{ width: '48%' }}/>
    <TextField label="Current Plan" variant="outlined" size="small" sx={{ width: '48%' }} />
    </Box>
    <Box sx={{ display: 'flex',  gap: '10px',marginBottom: '2px' }}>

    <TextField label="Cost" variant="outlined" size="small" sx={{ width: '48%' }} />
    <TextField label="Date" variant="outlined" size="small" sx={{ width: '48%' }} />

  </Box>

          </Box>

          {/* 3rd Box: Renewal Before */}
          <Box sx={{ border: '1px solid #ccc',borderRadius: '12px',  padding: '10px', gap: '10px' , marginTop : '1px',  width: '100%' }}>
            <Typography variant="h6" sx={{  marginBottom: '10px', color : '#01796F' }}>
              Renew Before January 05, 2028
            </Typography>
            <Box sx={{ marginBottom: '10px' }}>
              <FormLabel component="legend">Plan</FormLabel>
              <RadioGroup>
    <FormControlLabel 
      value="2-3 years" 
      control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />} 
      label="2-3 Years" 
      sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
    />
    <FormControlLabel 
      value="5 years" 
      control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />} 
      label="5 Years" 
      sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
    />
    <FormControlLabel 
      value="10 years" 
      control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }} />} 
      label="10 Years" 
      sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}
    />
  </RadioGroup>

            </Box>
            <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', marginBottom: '10px' }}>
              <TextField label="Cost" variant="outlined" size="small" sx={{ width: '48%' }} />
              <TextField
                label="Date"
                type="datetime-local"
                variant="outlined" size="small" sx={{ width: '48%' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </Box>

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
    marginTop: '250px',
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
                    sx={{ padding: '10px 30px', fontSize: '12px', backgroundColor: '#01796F' ,  marginTop: '250px', marginBottom : '50px' }}
                  >
                    Renew Now 
                  </Button>
          </Box>
        </Paper>
          </Box>
        </Box>
        </Box>
        </Box>
    );
  };

  export default RenewalForm;