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
import AdbIcon from '@mui/icons-material/Adb';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Badge } from '@mui/material';



const routes = {
  "Profile":"/profile",
  "Sign In":'/user/sign-in',
  "Register":"/user/sign-up",
  "Business Sign In" : "/seller/sign-in",
  "Business Sign Up" : "/seller/sign-up",
  "Logout":"/user/logout",
  "Add Product":"/seller/add-product",
  "My Products":"/seller/get-products"
}

// ['Products', 'Pricing', 'Blog']

function ResponsiveAppBar(props) {
  const [pages,setPages] = React.useState(['a']);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [email,setEmail] = React.useState(props.store.getState()['user']['email']);
  const [cartCount,setCartCount] = React.useState(props.store.getState()['cart']['size'])
  const settingsOnLogin = ['Profile', 'Logout'];
  const settingsNeutral = ['Sign In','Register',"Business Sign In","Business Sign Up"]
  const [entity,SetEntity] = React.useState(props.store.getState()['user']['entity'])
  const [settings,setSettings] = React.useState(settingsNeutral);
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
  let customroutes = {
    "user":[],
    "seller":['Add Product',"My Products"],
    "Admin":[],
    "default":[]
  }
                // setEmail(props.store.getState()['emailAddress'])

  const emailF = props.store.subscribe(()=>{
                setEmail(props.store.getState()['user']['email'])
                setCartCount(props.store.getState()['cart']['size'])
                SetEntity(props.store.getState()['user']['entity'])
              });

              React.useEffect(() => {
                email==""?setSettings(settingsNeutral):setSettings(settingsOnLogin)
            },[email])
            React.useEffect(() => {
              email==""?setPages(customroutes["default"]):setPages(customroutes[entity])
          },[email])
            React.useEffect(()=>{
              entity==""?setSettings(settingsNeutral):setSettings(settingsOnLogin)
            },[entity])
  

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Shopee 
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
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
            {console.log(pages)}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}><a href={routes[page]}>{page}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Shopee     
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a style={{"text-decoration":"none","color":"white"}} href={routes[page]}>{page}</a>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0,marginRight:2  }}>
          {
            email === ""? <div></div>:
            <a href='/user/cart' style={{"color":"white"}}>
              <Badge badgeContent={cartCount} color="primary"><ShoppingCartRoundedIcon fontSize='small' ></ShoppingCartRoundedIcon></Badge>
            </a>
          }

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {
                email===""?
              <PersonOutlineRoundedIcon></PersonOutlineRoundedIcon>:
              <div>
                <Avatar alt={email} src='/'></Avatar>
              </div>
              }
              
                

                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
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
              {settings.map((setting) => (
               
                <MenuItem key={setting} onClick={handleCloseUserMenu}> {console.log(setting,settings)}
                  <Typography sx={{ textAlign: 'center' }}><a href={routes[setting]}>{setting}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
