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
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Import Payment icon
import PersonIcon from '@mui/icons-material/Person';


const paymenthistory = () => {
    const data = [
        {
          paymenttype: 'Burial Application',
          paymentId: 'PAY123',
          paymentmethod: 'GCASH',
          amount: '₱ 5,500',
          date: '2024-10-18',
          status: 'APPROVED',
        },
        {
            paymenttype: 'Burial Application',
            paymentId: 'PAY134',
            paymentmethod: 'GCASH',
            amount: '₱ 3,522',
            date: '2024-10-18',
            status: 'APPROVED',
        },
        {
            paymenttype: 'Renewal',
            paymentId: 'PAY867',
            paymentmethod: 'GCASH',
            amount: '₱ 11,500',
            date: '2024-10-18',
            status: 'APPROVED',
        },
        {
            paymenttype: 'Burial Application',
            paymentId: 'PAY144',
            paymentmethod: 'PAYMAYA',
            amount: '₱ 2,500',
            date: '2024-10-18',
            status: 'APPROVED',
          },
          {
            paymenttype: 'Service Request',
            paymentId: 'PAY663',
            paymentmethod: 'GCASH',
            amount: '₱ 3,000',
            date: '2024-10-18',
            status: 'PENDING',
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
          <Typography variant="h5" sx={{ color: '#434445', marginBottom: '20px' ,marginRight: '20px'}}>
          Payment History
          </Typography>

    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 2 }}>
       
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Payment Type</TableCell>
                <TableCell>Payment ID</TableCell>
                <TableCell>Payment method</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.paymenttype}</TableCell>
                  <TableCell>{row.paymentId}</TableCell>
                  <TableCell>{row.paymentmethod}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.date}</TableCell>
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

export default paymenthistory;

