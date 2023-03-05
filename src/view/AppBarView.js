import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';


const rightLink = {
  fontSize: 16,
  color: '#ffff',
  ml: 3,
};

function AppBarView (props) {
    return (
        <div>
      <AppBar position="fixed" >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="#ae00ff"
            href="#"
            sx={{ fontSize: 24 }}
          >
            {'DeepFake Detector'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="#ae00ff"
              variant="h6"
              underline="none"
              href="#"
              sx={rightLink}
            >
              {'About'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="#"
              sx={{ ...rightLink, color: '#ffff' , fontWeight: 'bold' }}
            >
              {'Try Demo'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
    );
}

export default AppBarView;