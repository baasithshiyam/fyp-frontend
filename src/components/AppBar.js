import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { createTheme,ThemeProvider  } from '@mui/material/styles';


function AppBar(props) {

    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: '#140f1a',
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#a796b5',
          },
        },
      });
      
    return (
        <ThemeProvider theme={theme}>
            return <MuiAppBar color="primary"  elevation={0} position="fixed" {...props} />;
        </ThemeProvider>
    );
}

export default AppBar;