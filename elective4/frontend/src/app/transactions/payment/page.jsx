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


const paymentform = () => {
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
           

           <Box
  sx={{
    display: 'flex',
    justifyContent: 'left', // Center horizontally
    alignItems: 'left', // Center vertically
    marginTop: '10px', // Adjust margin as needed
    padding: '20px',
  }}
>
  <Paper
    sx={{
      width: '80%', // Width of the form
      padding: '50px',
      border: '1px solid #3d3b3b',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: 3,
    }}
  >
    {/* Payment Title with Icon */}
    <Box sx={{ color: '#01796F', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <AttachMoneyIcon sx={{ fontSize: 32, marginRight: '8px' }} />
      <Typography variant="h5">Payment</Typography>
    </Box>

    {/* Amount to Pay */}
    <TextField
      label="Amount to Pay"
      variant="outlined"
      size="small"
      sx={{ width: '77%', marginBottom: '20px' }}
    />

    {/* Payment Method */}
    <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
      <FormLabel component="legend">Payment Method</FormLabel>
      <RadioGroup row>
        <FormControlLabel value="gcash" control={<Radio />} label="Gcash" />
        <FormControlLabel value="paymaya" control={<Radio />} label="PayMaya" />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
      </RadioGroup>
    </FormControl>

    {/* Payment Information */}
    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
      Payment Information
    </Typography>

    {/* Payment Information Form */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Account Number"
        variant="outlined"
        size="small"
        sx={{ mb: 0.50, width: '350px', marginRight: '10px' }}
      />
      <TextField
        label="Account Name"
        variant="outlined"
        size="small"
        sx={{ mb: 0.50, width: '350px', marginRight: '10px' }}
      />
      <TextField
        label="Amount"
        variant="outlined"
        size="small"
        sx={{ mb: 1, width: '350px', marginRight: '10px' }}
      />
    </Box>

    {/* Remember Details Checkbox */}
    <FormGroup sx={{ marginTop: '10px', marginBottom: '20px' }}>
      <FormControlLabel
        control={<Checkbox />}
        label="Remember Details"
      />
    </FormGroup>

    {/* Action Buttons */}
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
    <Button
  variant="outlined"
  size="small"
  sx={{
    padding: '10px 30px',
    fontSize: '12px',
    borderColor: '#01796F', // Set the border color to #01796F
    color: '#01796F', // Set the text color to #01796F
    marginTop: '10px',
    marginBottom: '10px',
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
                    sx={{ padding: '10px 30px', fontSize: '12px', backgroundColor: '#01796F' ,  marginTop: '10px', marginBottom : '10px' }}
                  >
                    Pay Now 
                  </Button>
    </Box>
  </Paper>
</Box>
</Box>
</Box>

  );
};

export default paymentform;

