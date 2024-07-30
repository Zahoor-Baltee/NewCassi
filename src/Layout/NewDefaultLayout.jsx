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

const Root = styled(Box)({
    margin: 0,
    padding: 0,
    "& .MuiBox-root": {
        padding: "0px"
    },
    "& .MuiToolbar-root": {
        minHeight: "0px"
    },
    "& .MuiListItemIcon-root": {
        minWidth: "36px"
    }

});
const getIconByIndex = (index) => {
    if (index === 0) {
        return <DashboardIcon />
    } else if (index === 1) {
        return <PersonIcon />
    } else if (index === 2) {
        return <CalendarMonthIcon />
    } else if (index === 3) {
        return <ShowChartOutlinedIcon />
    } else if (index === 4) {
        return <SettingsOutlinedIcon />
    }

}

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

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

    const drawer = (
        <Root>
            <Box>
                <Toolbar />
                <Box sx={{ display: "flex", justifyContent: "center", height: "50px", }}>
                    <img src={logo} alt="logo" />
                </Box>
                <Divider />
                <List>
                    {['Dashboard', 'User', 'Expense Report', 'Activity Report', 'Advanced Settings and Management', 'Reports and Export', 'Days of Absence'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {getIconByIndex(index)}
                                </ListItemIcon>
                                <ListItemText primary={text} />
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
