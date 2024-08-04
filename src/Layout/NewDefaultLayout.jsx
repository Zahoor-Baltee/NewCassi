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
import { styled } from '@mui/material';
import logo from '../Assets/cassilogo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useNavigate } from 'react-router-dom';

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
                <Box sx={{ display: "flex", justifyContent: "center", height: "50px", }}>
                    <img src={logo} alt="logo" />
                </Box>
                <Divider />
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

    return (
        <Root>
            <Box sx={{ display: 'flex', padding: "0px" }}>
                <CssBaseline />
                {/* <AppBar
                position="fixed"
                sx={{
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
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar> */}
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
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    {props.children}
                </Box>
            </Box>
        </Root>
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
