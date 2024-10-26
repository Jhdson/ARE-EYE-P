import React from 'react'; 
import { AppBar, Toolbar, Typography, Button ,Grid, Box, IconButton, TextField, FormLabel, RadioGroup,
  Paper, FormControlLabel, Radio, MenuItem, FormGroup, Checkbox, FormControl} from '@mui/material';
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

const AdminDashboard = () => {
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
          Users
        </Button>
        
    
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <SettingsIcon sx={{ marginRight: '8px' }} />
          Settings
        </Button>
        <Button sx={{ justifyContent: 'flex-start', width: '100%', color: '#01796F' }}>
          <AssessmentIcon sx={{ marginRight: '8px' }} />
          Generate Reports
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
                <PersonIcon sx={{ marginRight: '4px' }} /> Admin
              </Button>
          </Toolbar>
        </AppBar>
             {/* Main Content Area */}
             <Box sx={{ padding: '20px', marginBottom: '1px' }}>
          <Typography variant="h5" sx={{ color: '#434445' }}>
          Admin Dashboard
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Grid container spacing={2} maxWidth="lg">
        
        {/* Total Users */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              2987
            </Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2, backgroundColor: '#01796F', '&:hover': { backgroundColor: '#015f57' } }}>
              View Users
            </Button>
          </Paper>
        </Grid>

        {/* Reports */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Reports</Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              2322
            </Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2, backgroundColor: '#01796F', '&:hover': { backgroundColor: '#015f57' } }}>
              View Reports
            </Button>
          </Paper>
        </Grid>

        {/* Analytics */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Analytics</Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              2804
            </Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2, backgroundColor: '#01796F', '&:hover': { backgroundColor: '#015f57' } }}>
              View Details
            </Button>
          </Paper>
        </Grid>

        {/* Notifications Available */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Notifications Available</Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              3303
            </Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2, backgroundColor: '#01796F', '&:hover': { backgroundColor: '#015f57' } }}>
              View Details
            </Button>
          </Paper>
        </Grid>

      </Grid>
    </Box>


        </Box>
      </Box>
      </Box>

  );
};

export default AdminDashboard;