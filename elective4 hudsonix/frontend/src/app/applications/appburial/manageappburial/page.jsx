"use client";

import React from 'react'; 
import { AppBar, Toolbar, Typography, Button, Box, IconButton,TextField,FormLabel,RadioGroup 
  ,FormControlLabel ,Radio , Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, data, List,
  ListItem,
  ListItemIcon,
  ListItemText,
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

  
const ManageAppBurial = () => {
    const data = [
        {
          applicationId: 'APP501',
          deceasedName: 'John Asingua',
          date: '2024-10-18',
          startTime: '10:00 AM',
          endTime: '11:00 AM',
          status: 'Pending',
        },
        {
          applicationId: 'APP602',
          deceasedName: 'Jannes Manait',
          date: '2024-10-19',
          startTime: '12:00 PM',
          endTime: '1:00 PM',
          status: 'Approved',
        },
        {
          applicationId: 'APP993',
          deceasedName: 'Paul Smith',
          date: '2024-10-20',
          startTime: '2:00 PM',
          endTime: '3:00 PM',
          status: 'Pending',
        },
        {
            applicationId: 'APP873',
            deceasedName: 'Paul Fyang',
            date: '2024-10-20',
            startTime: '2:00 PM',
            endTime: '3:00 PM',
            status: 'Pending',
          },
          {
            applicationId: 'APP763',
            deceasedName: 'Rain Hinata',
            date: '2024-10-20',
            startTime: '2:00 PM',
            endTime: '3:00 PM',
            status: 'Pending',
          },
        
        // Add more rows as needed...
      ];

    

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
           Manage Burial Application
          </Typography>

    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 2 }}>
        <h2>Burial Application</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application ID</TableCell>
                <TableCell>Deceased Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.applicationId}</TableCell>
                  <TableCell>{row.deceasedName}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.startTime}</TableCell>
                  <TableCell>{row.endTime}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
  <Button 
    variant="contained" 
    sx={{ backgroundColor: '#01796F', color: 'white', marginRight: 1, '&:hover': { backgroundColor: '#015f57' } }}
  >
    View
  </Button>
  <Button 
    variant="contained" 
    sx={{ backgroundColor: '#01796F', color: 'white', marginRight: 1, '&:hover': { backgroundColor: '#015f57' } }}
  >
    Edit
  </Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>


          </Box>
        </Box>
        </Box>
  );
};

export default ManageAppBurial;
