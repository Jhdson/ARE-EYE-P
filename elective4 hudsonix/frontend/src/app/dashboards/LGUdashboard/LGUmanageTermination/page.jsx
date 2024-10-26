import React from 'react'; 
import { AppBar, Toolbar, Typography, Button ,Grid, Box, IconButton, TextField, FormLabel, RadioGroup,
  Paper, FormControlLabel, Radio, MenuItem, FormGroup, Checkbox, FormControl,Table, TableBody, TableCell,
   TableContainer, TableHead, TableRow, data, List,
  ListItem,
  ListItemIcon,
  ListItemText,} from '@mui/material';
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
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';  // For Catacombs (building-like icon)
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';

const ManageappTermination = () => {
    const data = [
        {
          terminationId: 'TER735',
          catacombID: 'CTM233',
          dateofterminate: '2024-10-18',
          applicant: 'BABART',
          deceased: 'KOBE',
          status: 'EXPIRE',
        },
        {
            terminationId: 'TER735',
            catacombID: 'CTM233',
            dateofterminate: '2024-10-18',
            applicant: 'MAYANG',
            deceased: 'KOBEBRYANT',
            status: 'EXPIRE',
        },
        {
            terminationId: 'TER735',
            catacombID: 'CTM233',
            dateofterminate: '2024-10-18',
            applicant: 'BABARTLING',
            deceased: 'KALING',
            status: 'EXPIRE',
        },
        {
            terminationId: 'TER735',
            catacombID: 'CTM263',
            dateofterminate: '2024-10-18',
            applicant: 'BABART',
            deceased: 'JAMES',
            status: 'EXPIRE',
          },
          {
            terminationId: 'TER735',
            catacombID: 'CTM253',
            dateofterminate: '2024-10-18',
            applicant: 'BABART',
            deceased: 'lebron',
            status: 'EXPIRE',
          },
        
        // Add more rows as needed...
      ];
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
               <Box sx={{ padding: '20px', backgroundColor: 'white' }}>
          <Typography variant="h5" sx={{ color: '#434445', marginBottom: '20px' }}>
           Manage Termination
          </Typography>

    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 2 }}>
        <h2>Notification Termination</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Termination ID</TableCell>
                <TableCell>Catacomb ID</TableCell>
                <TableCell>Date of Terminate</TableCell>
                <TableCell>Applicant</TableCell>
                <TableCell>Deceased</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.terminationId}</TableCell>
                  <TableCell>{row.catacombID}</TableCell>
                  <TableCell>{row.dateofterminate}</TableCell>
                  <TableCell>{row.applicant}</TableCell>
                  <TableCell>{row.deceased}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
  <Button 
    variant="contained" 
    sx={{ backgroundColor: '#01796F', color: 'white', marginRight: 1, '&:hover': { backgroundColor: '#015f57' } }}
  >
    View
  </Button>
  <Button variant="contained" color="error" 
  sx = {{marginRight: 1,}}>
    
                      Decline
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: '#01796F', color: 'white', marginRight: 1, '&:hover': { backgroundColor: '#015f57' } }}  >
                      NOTIFY
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

export default ManageappTermination;