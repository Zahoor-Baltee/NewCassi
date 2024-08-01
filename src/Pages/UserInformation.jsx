import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Typography, Grid } from '@mui/material';


import image from '../Assets/man.png';
import expenseReportIcon from '../Assets/Icon.png';
import activityReport from '../Assets/activityReport.png';
import userAbsense from '../Assets/userAbsence.png';

const Root = styled(Box)(({ theme }) => ({
    margin: 0,
    padding: 0,
    "& .mainContainer": {

        padding: "20px",
        backgroundColor: "#f4f7fe",
        "& .cardContainer": {
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "20px",
            "@media (min-width:600px)": {
            },
            "& .cardpo": {
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                "& .firstName": {
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#808080",
                },
                "& .lastName": {
                    fontSize: "16px",
                    fontWeight: "500",
                },
                [theme.breakpoints.down('lg')]: {
                    flexDirection: "row",
                    gap: "40px",
                },
                "@media (min-width:600px)": {
                    flexDirection: "row",
                    gap: "40px",
                },
            },
            "& .userImage": {
                borderRadius: "12px",
                objectFit: "cover"
            },
            "& .editInfoButton": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "51px",
                borderRadius: "50px",
                "@media (min-width:600px)": {
                    width: "225px",
                },
                textTransform: "none",
            },
        },
        "& .userCardButtons": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
            "@media (min-width:600px)": {
                flexDirection: "row",
                gap: "20px",
            },
            "& .Buttonpo": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                height: "51px",
                borderRadius: "50px",
                "@media (min-width:600px)": {
                    width: "225px",
                },
                textTransform: "none",
            }
        }
    }
}));

export default function UserInfromation() {
    return (
        <Root>
            <Box className='mainContainer'>
                <Box className='cardContainer'>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        gap: "10px",
                        "@media (min-width:600px)": {
                            flexDirection: "row",
                            gap: 0,
                        },
                    }}>
                        <Button sx={{ color: "black", display: "flex", gap: "8px", textTransform: "none" }} variant="text">
                            <KeyboardBackspaceIcon /> Back
                        </Button>
                        <Button className='editInfoButton' variant="contained">Edit Information</Button>
                    </Box>
                    <Box className='cardpo'>
                        <Box sx={{
                            height: "230px",
                            width: "230px",
                            margin: "0 auto",
                            "@media (min-width:600px)": {
                                margin: 0,
                            },
                        }}>
                            <img className='userImage' src={image} width="100%" height="100%" alt="User" />
                        </Box>
                        <Box sx={{ p: 2, width: "100%" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography className='firstName'>First Name</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>Tomiwa Oyeledu</Typography>
                                    <Typography className='firstName' sx={{ textTransform: "none" }}>Email Address</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>test@gmail.com</Typography>
                                    <Typography className='firstName' sx={{ textTransform: "none" }}>Phone Number</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>0321-2111623</Typography>
                                    <Typography variant="h6" className='firstName' sx={{ textTransform: "none" }}>User's Creation Date</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>24-April-2024</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography className='firstName' sx={{ textTransform: "none" }}>Last Name</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>Dolapo</Typography>
                                    <Typography className='firstName' sx={{ textTransform: "none" }}>Team</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>Web Development</Typography>
                                    <Typography className='firstName' sx={{ textTransform: "none" }}>Status</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>Active</Typography>
                                    <Typography className='firstName' sx={{ textTransform: "none" }}>Last Activity</Typography>
                                    <Typography className='lastName' sx={{ textTransform: "none" }}>24-April-2024</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="userCardButtons">
                        <Button className='Buttonpo' variant="contained">
                            <img src={expenseReportIcon} alt="Expense Report Icon" />
                            <span>Expense Report</span>
                        </Button>
                        <Button className='Buttonpo' variant="contained">
                            <img src={activityReport} alt="Activity Report Icon" />
                            <span>Activity Report</span>
                        </Button>
                        <Button className='Buttonpo' variant="contained">
                            <img src={userAbsense} alt="User Absence Icon" />
                            <span>User Absences</span>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Root>
    );
}
