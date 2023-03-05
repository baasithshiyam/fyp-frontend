import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
    return (
        <div>
            return <MuiAppBar elevation={0} position="fixed" {...props} />;
        </div>
    );
}

export default AppBar;