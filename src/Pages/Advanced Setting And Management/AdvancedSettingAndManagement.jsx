import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


const Root = styled(Box)(({ theme }) => ({
    margin: 0,
    padding: 0,
    "& .mainContainer": {
        padding: "20px",
        backgroundColor: "#f4f7fe",
        "& .label-po": {
            fontWeight: "600",
            textTransform: "none"
        }
    }
}));

export default function AdvancedSettingAndManagement() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Root>
            <Box className='mainContainer'>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }}>Advanced Setting and Management</Typography>
                    <Box sx={{ display: "flex", gap: "15px" }}>
                        <Button variant="text">Cancel</Button>
                        <Button variant="contained">Save</Button>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ width: '100%' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab className='label-po' label="General" value="1" />
                                    <Tab className='label-po' label="Activity Report" value="2" />
                                    <Tab className='label-po' label="Expense Report" value="3" />
                                    <Tab className='label-po' label="Notifications" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel sx={{ display: "flex", flexDirection: "column", gap: "20px" }} value="1">
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>Create Teams</Typography>
                                            <Typography sx={{ color: "#959595" }}>Developement team</Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>Create Teams</Typography>
                                            <Typography sx={{ color: "#959595" }}>Create Departments</Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>Create Teams</Typography>
                                            <Typography sx={{ color: "#959595" }}>Create Departments</Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>Create Teams</Typography>
                                            <Typography sx={{ color: "#959595" }}>Developement team</Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>Activity Reports</Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>Expense Reports</Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>configure all the categories for activity reports </Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: "600" }}>Delete User</Typography>
                                            <Typography sx={{ color: "#959595" }}>Carlos Fonte</Typography>
                                        </Box>
                                        <Box>
                                            <CreateOutlinedIcon />
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value="2">Activity Report</TabPanel>
                            <TabPanel value="3">Expense Report</TabPanel>
                            <TabPanel value="4">Notifications</TabPanel>
                        </TabContext>
                    </Box>
                </Box>

            </Box>
        </Root>
    );
}
