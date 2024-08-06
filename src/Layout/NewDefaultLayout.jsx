import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, IconButton, styled, InputAdornment, TextField, FormControl, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import logo from '../Assets/cassimainlogo.png'
import Uae from '../Assets/uae.png'
import Us from '../Assets/UsFlag.webp'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; import { useNavigate } from 'react-router-dom';

const Root = styled(Box)({
    margin: 0,
    padding: 0,
    "& .MuiDrawer-paper": {
        boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    "& .MuiBox-root": {
        padding: "0px",

    },
    "& .MuiToolbar-root": {
        minHeight: "0px",
        boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    "& .MuiListItemIcon-root": {
        minWidth: "36px",
    }

});


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [routes, setRoutes] = React.useState('/dashboard');
    const menuList = [
        { name: "Dashboard", url: "/dashboard" },
        { name: "User", url: "/user" },
        { name: "Activity Report", url: "/expensereports" },
        { name: "Activity Report", url: "/activityreport" },
        { name: "Advanced Settings and Management", url: "/advancesetting" },
        { name: "Reports and Export", url: "/reportsandexport" },
        { name: "Days of Absence", url: "/activityreport" },

    ]
    let navigate = useNavigate()
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const getIconByIndex = (index, url) => {
        if (index === 0) {
            return <DashboardIcon sx={{ color: routes === url ? "#fff" : "", }} />
        } else if (index === 1) {
            return <PersonIcon sx={{ color: routes === url ? "#fff" : "", }} />
        } else if (index === 2) {
            return <CalendarMonthIcon sx={{ color: routes === url ? "#fff" : "", }} />
        } else if (index === 3) {
            return <ShowChartOutlinedIcon sx={{ color: routes === url ? "#fff" : "", }} />
        } else if (index === 4) {
            return <SettingsOutlinedIcon sx={{ color: routes === url ? "#fff" : "", }} />
        }

    }
    const handleRoutes = (routes) => {
        navigate(routes)
        setRoutes(routes)
    }
    const drawer = (
        <Root>
            <Box>
                <Toolbar />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80px", }}>
                    <img src={logo} height='70%' width='90%' alt="logo" />
                </Box>
                {/* <Divider /> */}
                <List>
                    {menuList.map((e, index) => (
                        <ListItem key={e.name} onClick={() => handleRoutes(e.url)} disablePadding>
                            <ListItemButton sx={{ backgroundColor: routes === e.url ? "#0171BC" : "", color: routes === e.url ? "#fff" : "", margin: 1, borderRadius: "10px", '&:hover': { backgroundColor: routes === e.url ? "#0171BC" : "", } }}>
                                <ListItemIcon>
                                    {getIconByIndex(index, e.url)}
                                </ListItemIcon>
                                <ListItemText primary={e.name} />
                            </ListItemButton>

                        </ListItem>

                    ))}
                </List>

            </Box>
        </Root>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [age, setAge] = React.useState("eng");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = (event) => {
        setAge(event.target.value);
    };




    return (
        <Root>
            <Box sx={{ display: 'flex', padding: "0px" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: "#fff",
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <Box>
                                <TextField
                                    size='small'
                                    fullWidth
                                    sx={{
                                        backgroundColor: "#f4f7fe",
                                        "& fieldset": {
                                            border: 'none',

                                        },
                                    }}
                                    className='inputField'
                                    placeholder='Search'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Box sx={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid black", overflow: "hidden" }}>
                                        <img src={Uae} alt="" width="100%" />
                                        {/* <img src={Us} alt="" /> */}
                                    </Box>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            size='small'
                                            sx={{
                                                border: "none",
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    border: "none"
                                                }

                                            }}
                                            onChange={handleChange}
                                            id="demo-controlled-open-select"
                                            value={age}
                                        >
                                            <MenuItem value="eng">Eng (US)</MenuItem>
                                            <MenuItem value="ur">Urdu</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <NotificationsNoneIcon sx={{ color: "black" }} />
                                </Box>
                                <Box>
                                    <React.Fragment>
                                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', backgroundColor: "#f4f7fe" }}>
                                            <Tooltip title="Account settings">
                                                <IconButton
                                                    onClick={handleClick}
                                                    size="medium"
                                                    sx={{ borderRadius: 0 }}
                                                    aria-controls={open ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                                    <Box sx={{ marginX: 1 }}>
                                                        <Typography variant='subtitle1' sx={{ color: "black", lineHeight: 1.0 }}>John</Typography>
                                                        <Typography variant='body2'>Admin</Typography>
                                                    </Box>
                                                    <KeyboardArrowDownIcon />
                                                </IconButton>

                                            </Tooltip>
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&::before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Avatar /> Profile
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Avatar /> My account
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                Add another account
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <Settings fontSize="small" />
                                                </ListItemIcon>
                                                Settings
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, mt: 8, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    {/* <Toolbar /> */}
                    {props.children}
                </Box>
            </Box>
        </Root >
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
