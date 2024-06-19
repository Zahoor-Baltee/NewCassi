import { Box, TextField, InputAdornment, styled, Divider, Button } from '@mui/material'
import React from 'react'
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import ChartImg from '../Assets/chart.jpg';
import clientGraph from '../Assets/clientGraph.png';
import activityGraph from '../Assets/activityGraph.png';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import TickPlacementBars from './Chart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const Root = styled(Box)({
    margin: 0,
    padding: 0,
    "& .mainContainer": {
        padding: "20px",
        backgroundColor: "#f4f7fe",
        "& .headerSection": {
            display: "flex",
            justifyContent: "space-between",
            padding: "30px 0px"
        },
        " & .inputField": {
            backgroundColor: "#ffffff",
            width: "341px",
            borderRadius: "10px"
        },
        "& .spentThisMonth": {
            width: "259px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px"
        },
        "& .newClients": {
            width: "257px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px"
        },
        "& .earning": {
            width: "257px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            display: 'flex',
            gap: "20px",
            alignItems: "center",
            padding: "10px"
        },
        "& .activity": {
            width: "257px",
            borderRadius: "20px",
            backgroundColor: "#0171BB",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px"
        },
        "& .secondSection": {
            width: "475px",
            height: "345px",
            borderRadius: "20px",
            backgroundColor: " #FFFFFF",
            BorderTop: "1px dashed red"

        },
        "& .expenseReportPerDay": {
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 20px 0px 20px",
        },
        "& .thirdSection": {
            width: "475px",
            height: "345px",
            borderRadius: "20px",
            backgroundColor: " #FFFFFF",
            padding: "20px",
            marginTop: "30px"
        },
        "& .approvedReport": {
            display: "flex",
            flexDirection: "column",
            gap: "15px"
        },
        "& .rejectedReport": {
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }

    }

});
const NewDashboard = () => {
    return (
        <Root>
            <Box className="mainContainer">
                {/* --------------------Header Section--------------- */}
                <Box className="headerSection">
                    <Box>
                        <Typography sx={{
                            fontWeight: 700,
                            fontSize: "14px",
                            letterSpacing: "-2%",
                            color: "#ABABAC"
                        }}>Hi User,</Typography>
                        <Typography sx={{ color: "#27A9E0", fontWeight: "600", fontSize: "34px", lineHeight: "42px", }}>Welcome to Caasi!</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <TextField
                            sx={{
                                "& fieldset": { border: 'none' },
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
                </Box>
                {/* --------------------First Section--------------- */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box className="spentThisMonth">
                            <Box>
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    letterSpacing: "-2%",
                                    color: "#B3B3B3"
                                }}>Spent this month</Typography>
                                <Typography sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "32px",
                                    letterSpacing: "-2%",
                                    color: "#1B2559"
                                }}>$682.5</Typography>
                            </Box>
                            <Box><img src={ChartImg} alt="" /></Box>
                        </Box>
                        <Box className="newClients">
                            <Box sx={{ height: "56px", width: "56px", borderRadius: "50%", backgroundColor: "#0171BB", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <PeopleAltIcon sx={{ color: "#ffffff" }} />
                            </Box>
                            <Box className="">
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    letterSpacing: "-2%",
                                    color: "#B3B3B3"
                                }}>New clients</Typography>
                                <Typography sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "32px",
                                    letterSpacing: "-2%",
                                    color: "#1B2559"
                                }}>321</Typography>
                            </Box>
                            <Box><img src={clientGraph} alt="" /></Box>
                        </Box>
                        <Box className="earning">
                            <Box sx={{ height: "56px", width: "56px", borderRadius: "50%", backgroundColor: "#f4f7f6", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <BarChartRoundedIcon sx={{ color: "#0171BB" }} />
                            </Box>
                            <Box className="">
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    letterSpacing: "-2%",
                                    color: "#B3B3B3"
                                }}>Earning</Typography>
                                <Typography sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "32px",
                                    letterSpacing: "-2%",
                                    color: "#1B2559"
                                }}>$350.40</Typography>
                            </Box>

                        </Box>
                        <Box className="activity">
                            <Box className="">
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    letterSpacing: "-2%",
                                    color: "#E9EDF7"
                                }}>Activity</Typography>
                                <Typography sx={{
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    lineHeight: "32px",
                                    letterSpacing: "-2%",
                                    color: "#ffffff"
                                }}>$540.50</Typography>
                            </Box>
                            <Box><img src={activityGraph} alt="" /></Box>
                        </Box>

                    </Box>

                    {/* --------------------First Section Complete--------------- */}



                    {/* --------------------Second Section Start--------------- */}
                    <Box className='secondSection'>
                        <Box className='expenseReportPerDay'>
                            <Box>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        letterSpacing: "-2%",
                                        color: "#B3B3B3"
                                    }}>expense reports per day</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "24px",
                                        fontWeight: 600,
                                        lineHeight: "32px",
                                        letterSpacing: "-2%",
                                        color: "#1B2559"
                                    }}>$682.5</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ height: "33px", width: "33px", borderRadius: "7px", backgroundColor: "#F4F7FE", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <BarChartRoundedIcon sx={{ color: "#0171BB" }} />
                            </Box>
                        </Box>
                        <Box>
                            <TickPlacementBars />
                        </Box>
                    </Box>
                </Box>

                {/* --------------------Third Section Start--------------- */}

                <Box>
                    <Box className='thirdSection'>
                        <Box sx={{ display: "flex", gap: "30px", }}>
                            <Box className="approvedReport">
                                <Typography sx={{
                                    fontWeight: "500",
                                    fontSize: "12px",
                                    letterSpacing: "-2%",
                                    color: "#1EB25A"
                                }}>No. of Approved Reports: 13</Typography>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        letterSpacing: "-2%",
                                        color: "#A3AEDO"
                                    }}>Month of June</Typography>
                                    <Typography sx={{
                                        fontWeight: "700",
                                        fontSize: "18px",
                                        lineHeight: "32px",
                                        letterSpacing: "-2%",
                                        color: "#1B2559"
                                    }}>Activity Report</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: "700",
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        letterSpacing: "-2%",
                                        color: "#1B2559"
                                    }}>Kids Allowance</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letterSpacing: "-2%",
                                            color: "#E11E1E"
                                        }}
                                    >Rejected</Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            letterSpacing: "-2%",
                                            color: "#1B2559"
                                        }}
                                    >Wearing Dinner</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letterSpacing: "-2%",
                                            color: "#1EB25A"
                                        }}
                                    >Approved</Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            letterSpacing: "-2%",
                                            color: "#1B2559"
                                        }}
                                    >Top Up</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letterSpacing: "-2%",
                                            color: "#1EB25A"
                                        }}
                                    >Approved</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: "3px", height: "185px", backgroundColor: "#27A9E0", borderRadius: "10px", marginTop: "65px" }}></Box>
                            <Box className="rejectedReport">
                                <Typography
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        letterSpacing: "-2%",
                                        color: "#E53A3A"
                                    }}
                                >No. of Rejected Reports: 5</Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", borderRadius: "5px", }}>
                                    <Button size="small"
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: "10px",
                                            lineHeight: "23px",
                                            letterSpacing: "-2%",
                                            color: "#1B2559",
                                            boxShadow: 1
                                        }}
                                    >Show Approved Reports</Button>
                                    <Button size="small"
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: "10px",
                                            lineHeight: "23px",
                                            letterSpacing: "-2%",
                                            color: "#A3AED0",
                                            boxShadow: 1
                                        }}
                                    >Show Rejected Reports</Button>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: "700",
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        letterSpacing: "-2%",
                                        color: "#1B2559"
                                    }}>Tution Fees</Typography>
                                    <Typography sx={{
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        lineHeight: "20px",
                                        letterSpacing: "-2%",
                                        color: "#1EB25A"
                                    }}>Approved</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: "700",
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        letterSpacing: "-2%",
                                        color: "#1B2559"
                                    }}>Car Fuel</Typography>
                                    <Typography sx={{
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        lineHeight: "20px",
                                        letterSpacing: "-2%",
                                        color: "#E11E1E"
                                    }}>Rejected</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: "700",
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        letterSpacing: "-2%",
                                        color: "#1B2559"
                                    }}>Public Transport</Typography>
                                    <Typography sx={{
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        lineHeight: "20px",
                                        letterSpacing: "-2%",
                                        color: "#E11E1E"
                                    }}>Rejected</Typography>
                                </Box>
                            </Box>

                            <Box>
                                <MoreVertIcon />
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "5px" }}>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: "16px",
                                lineHeight: "28px",
                                letteSpacing: "-2%",
                                color: "#0171BC"
                            }}>View All</Typography>
                            <ArrowRightAltRoundedIcon sx={{ color: "#0171BC" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Root>
    )
}

export default NewDashboard