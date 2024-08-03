import React from 'react';
import {
    Box, Typography, Button, Avatar, Stack, useMediaQuery, Divider
} from '@mui/material';
import { styled } from '@mui/system';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { CheckCircle, Info } from '@mui/icons-material';
import Recepit from "../../Assets/receipt.jpeg"

const Root = styled(Box)({
    margin: 0,
    padding: 0,
    "& .mainContainer": {
        padding: "20px",
        backgroundColor: "#f4f7fe",

        "& .ReportContainer": {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            padding: "20px 50px",
        },
        "& .Transportation": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        }
    }

});
function ExpenseReports() {

    return (
        <Root>
            <Box className="mainContainer">

                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                    <ArrowCircleLeftRoundedIcon sx={{ color: "#0073BC" }} />
                    <Typography sx={{ color: "#374557", fontSize: "20px", fontWeight: "600" }}>
                        Rejected expense report
                    </Typography>
                </Box>
                <Box className="ReportContainer">
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button sx={{ display: "flex", alignItems: "center", gap: "7px", borderRadius: "5px", textTransform: "none", backgroundColor: "#F9D2D3", color: "#374557", width: "170px" }}>
                            <CancelOutlinedIcon sx={{ color: "#ED1C24" }} />
                            <Typography sx={{ color: "#374557", fontSize: "16px" }}>Rejected</Typography>
                        </Button>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "38px", width: "38px", backgroundColor: "#0A75BD", color: "#ffffff", borderRadius: "10px" }}>
                            <EditOutlinedIcon />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: "200px", alignItems: 'center', marginBottom: "10px", mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccountCircleRoundedIcon sx={{ color: "#0073BC" }} />
                            <Typography sx={{ color: "#374557", fontSize: "16px", fontWeight: "600" }}>Carlos</Typography>

                        </Box>
                        <Typography sx={{ color: "#374557", fontSize: "14px", fontWeight: "600" }}>
                            Date of Submission: 28-June-2024
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <Box className='Transportation'>
                            <Button
                                variant="contained"

                                sx={{
                                    textAlign: "center",
                                    width: "800px",
                                    backgroundColor: '#DC3545',
                                    textTransform: 'none',
                                }}
                            >
                                Transportation
                            </Button>
                            <Info sx={{ color: "#DC3545" }} />
                        </Box>
                        <Box className='Transportation'>
                            <Button
                                variant="contained"

                                sx={{
                                    textAlign: "center",
                                    width: "800px",
                                    backgroundColor: '#0A75BD',
                                    textTransform: 'none',
                                }}
                            >
                                $15
                            </Button>
                            <CheckCircle sx={{ color: "#18AB56" }} />
                        </Box>
                        <Box className='Transportation'>
                            <Button
                                variant="contained"

                                sx={{
                                    textAlign: "center",
                                    width: "800px",
                                    backgroundColor: '#0A75BD',
                                    textTransform: 'none',
                                }}
                            >
                                20 May,2024
                            </Button>
                            <CheckCircle sx={{ color: "#18AB56" }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "250px", height: "250" }}>
                            <img src={Recepit} height='100%' width='100%' alt="" />

                        </Box>
                    </Box>
                    <Box >
                        <Typography sx={{ color: "#0171BC", fontWeight: "600" }}>
                            Description
                        </Typography>
                        <Divider sx={{ my: 1 }} />

                        <Typography sx={{ color: "#0171BC", fontWeight: "600" }}>
                            reason of rejected expense report
                        </Typography>
                        <Typography variant="body2" mt={1}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s.
                        </Typography>
                    </Box>
                </Box>


            </Box>
        </Root >
    );
}

export default ExpenseReports;
