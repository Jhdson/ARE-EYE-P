
"use client";

import React from 'react'; 
import { AppBar, Toolbar, Typography, Button, Box, IconButton ,TextField,searchQuery } from '@mui/material';
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


const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Static Side Panel */}
      <Box
        sx={{
          width: '250px',
          height: '100vh',
          backgroundColor: '#ebebed', // Background color for the panel
          color: 'white',
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
              marginRight: '10px', // Space between logo and title
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
          Application burial
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <RequestQuoteIcon sx={{ marginRight: '8px' }} />
          Service request
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
            marginBottom: '16px', // Push the sign out button to the bottom
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
        
        <Box sx={{ padding: '20px', marginBottom: '11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <Typography variant="h5" sx={{ color: '#434445', marginLeft: '10px' }}>
    Welcome Jay!
  </Typography>

  <TextField
    label="Search map"
    variant="outlined"
    size="small"
    value={searchQuery} // The value of the search input
    onChange={(e) => setSearchQuery(e.target.value)} // Updates the search query state
    sx={{ width: '320px', marginRight: '60px' }} // Styling for the search bar
  />
</Box>
<Box sx={{ marginTop: '10px', marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.995262908795!2d123.93154788715817!3d10.301906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999928b6495bf%3A0x83c4fe213e7472b3!2sGun-ob%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1727741734054!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>

       {/*<Box sx={{ padding: '20px',   borderTop: '1px solid gray', marginBottom: '0.1px' }}>
          <Typography variant="h5" sx={{ color: '#01796F' }}>
            Map Location
          </Typography>
          </Box>

        </Box>*/}

        {/* Temporary Image */}
        <Box
        
            sx={{
              marginTop: '1px',
              marginLeft: '12px',
              display: 'flex',
              justifyContent: 'left', // Center the image horizontally
              alignItems: 'center', // Center the image vertically
              
            }}
            
            
          >
            
          
          
             </Box>
          </Box>
      </Box>

  );
};

export default Dashboard;