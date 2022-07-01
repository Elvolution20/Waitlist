import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { socials } from './Social';

// const pages = ['Home', 'About', 'Contact'];

const Appbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar position="relative" elevation={0} sx={{background: 'transparent'}}>
      <Toolbar disableGutters > 
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            
          }}
        >
            <img src='logo.svg' alt='' width={''} height={''}/>
          </Typography>
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            position: "absolute",
            left: "80%",
            gap: 1,
          }}>
            {socials.map((social, id) => (
            <Button
              key={id}
              sx={{ my: 2, color: 'purple',  }}
            >
              {social}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Appbar;
