import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../logo.png';
export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#242527' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                        <img style={{ marginRight: '4px' }} src={logo} alt="" />  Ishtiaq's Stories
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
