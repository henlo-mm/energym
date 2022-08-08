import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../styles/admin_board.css';
import AuthUser from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

//const pages = ['Usuarios', 'Rutinas'];


const AdminBoard = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const navigate = useNavigate();

  const logOut = () => {
    AuthUser.logout();
    navigate("/login");
  };


  return (
    <div>
      <AppBar className='app-bar' position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <img
                  className="logo-icon"
                  src={require('../resources/images/riendo.png')} 
              />

            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#50007F',
                textDecoration: 'none',
              }}
            >
              ENERGYM POINT
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon className='menu-icon'/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
               {/*  {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}

                <MenuItem>
                <Button className="items" href="/admin/user">
                  USUARIOS
                </Button>
              </MenuItem>
              <MenuItem>
                <Button className="items">
                  RUTINAS
                </Button>
              </MenuItem>
              </Menu>
            </Box>
            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <img
                  className="logo-icon"
                  src={require('../resources/images/riendo.png')} 
              />

            </IconButton>
          {/*  <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#50007F',
                textDecoration: 'none',
              }}
            >
              ENERGYM POINT
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             {/*  {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="items"
                >
                  {page}
                </Button>
              ))} */}
              <MenuItem>
                <Button className="items"  href="/admin/user">
                  USUARIOS
                </Button>
              </MenuItem>
              <MenuItem>
                <Button className="items">
                  RUTINAS
                </Button>
              </MenuItem>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                    <Typography textAlign="center">Perfil</Typography>
                </MenuItem>
                <MenuItem onClick={logOut}>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                </MenuItem>
              {/*   {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Grid container>
        <Container maxWidth="xl" className="container-login" > 
          <Grid container>
              <Grid 
                item 
                align="center" 
                xs={ 12 }
              > 
                <Box
                  component="img"
                  className="img-admin"
                  alt="The house from the offer."
                  src={require('../resources/images/coaches.png')}
                /> 
              </Grid>        
          </Grid>
        </Container>
      </Grid> */}
    </div>
  );
};
export default AdminBoard;
