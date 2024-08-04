import React from 'react'
import { styled } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';
import TabPanel from '@mui/lab/TabPanel';
const Root = styled(Box)({
    margin: 0,
    padding: 0,
    backgroundColor:"#FAFBFC",
    "& .mainContainer":{
        padding:"32px",
"& .notif-permission": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // color:'white',
            backgroundColor: '#0171bc',
            height: '55px',
            borderRadius: '10px'
        },
        "& .left": {
            color: 'white',
            fontSize: '8px',
            padding: '0px 15px',
        },
        "& .right": {
            color: 'white',
            padding: '0px 10px'


        }
    },
    "& .mainBox":{
        borderBottom:"1px solid #ccc",
        padding:"14px 4px "
    }

});
function Notifications() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Root>
    <Box className='mainContainer'>
    <Box className='notif-permission'>
        <Box className='left'>
            <Typography sx={{ fontSize: '10px' }}><b>Turn on push notification</b> to know when your video has been watched and interacted with.</Typography>
        </Box>
        <Box className='right' sx={{}}>
            <Button sx={{ fontSize: '10px', color: 'white' }}><b>Allow push notification</b></Button>
            <Button sx={{ fontSize: '10px', color: 'white' }}><b>Dismiss</b></Button>
        </Box>
    </Box>
    <Box className="Notification">
        <h2>Notifications</h2>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab  sx={{textTransform:"none"}} label={<Typography>Overview</Typography>} value="1" />
            <Tab  sx={{textTransform:"none"}} label={<Typography>Data</Typography>} value="2" />
            <Tab  sx={{textTransform:"none"}} label={<Typography>Status</Typography>} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">

<Box className="mainBox">
    <Box display="flex" alignItems="center" gap="5px">
        <CircleIcon sx={{fontSize:"5px"}}/>
        <Typography variant='caption'>First view on </Typography>
        <Typography variant='body1'> Peter's big cool idea</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap="5px" marginTop="10px">
    <AccountCircleIcon/>
        <Typography variant='body1'>Someone </Typography>
        <Typography variant='caption'>watched</Typography>
        <CircleIcon sx={{fontSize:"5px"}}/>
        <Typography variant='caption'> about 13 hour ago</Typography>
    </Box>
</Box>
<Box className="mainBox">
    <Box display="flex" alignItems="center" gap="5px">
        <CircleIcon sx={{fontSize:"5px"}}/>
        <Typography variant='caption'>First view on </Typography>
        <Typography variant='body1'> Peter's big cool idea</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap="5px" marginTop="10px">
    <AccountCircleIcon/>
        <Typography variant='body1'>Someone </Typography>
        <Typography variant='caption'>watched</Typography>
        <CircleIcon sx={{fontSize:"5px"}}/>
        <Typography variant='caption'> about 13 hour ago</Typography>
    </Box>
</Box>
<Box className="mainBox">
    <Box display="flex" alignItems="center" gap="5px">
        <CircleIcon sx={{fontSize:"5px"}}/>
        <Typography variant='caption'>First view on </Typography>
        <Typography variant='body1'> Peter's big cool idea</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap="5px" marginTop="10px">
    <AccountCircleIcon/>
        <Typography variant='body1'>Someone </Typography>
        <Typography variant='caption'>watched</Typography>
        <CircleIcon sx={{fontSize:"5px"}}/>
        <Typography variant='caption'> about 13 hour ago</Typography>
    </Box>
</Box>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
        </Box>
    </Box>
</Box>
</Root>
  )
}

export default Notifications
