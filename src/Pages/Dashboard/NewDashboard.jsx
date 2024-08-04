import { Box, TextField, InputAdornment, styled, Divider, Button } from '@mui/material'
import React from 'react'
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import ChartImg from '../../Assets/chart.jpg';
import clientGraph from '../../Assets/clientGraph.png';
import activityGraph from '../../Assets/activityGraph.png';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import TickPlacementBars from '../../Componenets/Chart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

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
        "& .absenceRequests": {
            width: "227px",
            height: "345px",
            borderRadius: "20px",
            backgroundColor: " #FFFFFF",
            padding: "20px"
        },
        "& .MuiTypography-root": {
            lineHeight: "20px"
        },
        "& .thirdSection": {
            width: "475px",
            height: "345px",
            borderRadius: "20px",
            backgroundColor: " #FFFFFF",
            padding: "20px",

        },
        "& .approvedReport": {
            display: "flex",
            flexDirection: "column",
            gap: "15px"
        },
        // "& .rejectedReport": {
        //     display: "flex",
        //     flexDirection: "column",
        //     gap: "10px"
        // },
        "& .thirdSection": {
            width: "475px",
            height: "345px",
            borderRadius: "20px",
            backgroundColor: " #FFFFFF",
            padding: "20px",
        },
        "& .rejectedReport": {
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        },
        "& .activityReports": {
            width: "350px",
            padding: "20px !important",
            borderRadius: "20px",
            opacity: "0px",
            backgroundColor: "#FFFFFF",
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
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Box className='secondSection'>
                            <Box className='expenseReportPerDay'>
                                <Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "14px",
                                            lineHeight: "24px",
                                            letterSpacing: "-2%",
                                            color: "#A3AED0"
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
                        <Box className='absenceRequests'>
                            <Box>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontSize: "18px",
                                    lineHeight: "32px",
                                    letteSpacing: "-2%",
                                    color: "#1B2559",
                                    marginBottom: "5px"
                                }}>Absence Requests</Typography>
                            </Box>
                            <Box>
                                <Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>First Name</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Joe</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Last Name</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>West</Typography>
                                        </Box>
                                        <Box>
                                            <MoreVertIcon />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "26px", }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Start Date</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>12-6-2024</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>End Date</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>15-06-2024</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "26px", }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Paid Leaves</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>10</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Unpaid Leaves</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>15</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <hr sx={{ width: "100px" }} />
                                <Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>First Name</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Joe</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Last Name</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>West</Typography>
                                        </Box>
                                        <Box>
                                            <MoreVertIcon />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "26px", }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Start Date</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>12-6-2024</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>End Date</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>15-06-2024</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "26px", }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Paid Leaves</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>10</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "10px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Unpaid Leaves</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                lineHeight: "28px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>15</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "5px" }}>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            lineHeight: "28px",
                                            letteSpacing: "-2%",
                                            color: "#0171BC"
                                        }}>View all</Typography>
                                        <ArrowRightAltRoundedIcon sx={{ color: "#0171BC" }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "350px",
                            padding: "20px !important",
                            borderRadius: "20px",
                            opacity: "0px",
                            backgroundColor: "#FFFFFF",
                        }}>
                            <Box>
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: "10px",
                                    lineHeight: "20px",
                                    letteSpacing: "-2%",
                                    color: "#A3AED0"
                                }}>Expense Report</Typography>
                                <Typography sx={{
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    letteSpacing: "-2%",
                                    color: "#1B2559",
                                    marginBottom: "10px"
                                }}>Pending Report</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", gap: "10px" }}>
                                        <Box sx={{ height: "60px", width: '4px', backgroundColor: "#018CEA", borderRadius: "16px" }}></Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Joe West</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "18px",
                                                lineHeight: "32px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Design Course</Typography>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>21 Jun, 19:04</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "24px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                            textAlign: "right",
                                            borderBottom: "1px solid red"
                                        }}>
                                            Pending Approval
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", gap: "10px" }}>
                                        <Box sx={{ height: "60px", width: '4px', backgroundColor: "#018CEA", borderRadius: "16px" }}></Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Joe West</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "18px",
                                                lineHeight: "32px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Design Course</Typography>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>21 Jun, 19:04</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "24px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                            textAlign: "right",
                                            borderBottom: "1px solid red"
                                        }}>
                                            Pending Approval
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", gap: "10px" }}>
                                        <Box sx={{ height: "60px", width: '4px', backgroundColor: "#018CEA", borderRadius: "16px" }}></Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Joe West</Typography>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "18px",
                                                lineHeight: "32px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Design Course</Typography>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>21 Jun, 19:04</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "24px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                            textAlign: "right",
                                            borderBottom: "1px solid red"
                                        }}>
                                            Pending Approval
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "5px" }}>
                                    <Typography sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        letteSpacing: "-2%",
                                        color: "#0171BC",
                                        marginTop: "10px"
                                    }}>View all Pending Report</Typography>
                                    <ArrowRightAltRoundedIcon sx={{ color: "#0171BC", marginTop: "5px" }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* --------------------Second Section End--------------- */}
                    {/* --------------------Third Section Start--------------- */}
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Box className='thirdSection'>
                            <Box sx={{ display: "flex", gap: "25px", }}>
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
                            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "5px", marginTop: "20px" }}>
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

                        <Box className='absenceRequests'>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <Box>
                                    <Typography sx={{
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        letteSpacing: "-2%",
                                        color: "#A3AED0",
                                        marginBottom: "5px"
                                    }}>Month of June</Typography>
                                    <Typography sx={{
                                        fontWeight: 700,
                                        fontSize: "18px",
                                        lineHeight: "32px",
                                        letteSpacing: "-2%",
                                        color: "#1B2559",
                                    }}>Comments</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "28px",
                                            letteSpacing: "-2%",
                                            color: "#1B2559",
                                        }}>Month of May Expense</Typography>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letteSpacing: "-2%",
                                            color: "#A3AED0",
                                        }}>Submitted on June 01, 2024</Typography>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letteSpacing: "-2%",
                                            color: "#1EB25A",
                                        }}>Approved</Typography>
                                    </Box>
                                    <Box>
                                        <DriveFileRenameOutlineIcon sx={{ fontSize: "14px", color: "#018CEA" }} />
                                    </Box>

                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "28px",
                                            letteSpacing: "-2%",
                                            color: "#1B2559",
                                        }}>Kids Allowance</Typography>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letteSpacing: "-2%",
                                            color: "#A3AED0",
                                        }}>Submitted on June 01, 2024</Typography>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                        }}>Rejected</Typography>
                                    </Box>
                                    <Box>
                                        <DriveFileRenameOutlineIcon sx={{ fontSize: "14px", color: "#018CEA" }} />
                                    </Box>

                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "28px",
                                            letteSpacing: "-2%",
                                            color: "#1B2559",
                                        }}>Car Fuel Expense</Typography>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letteSpacing: "-2%",
                                            color: "#A3AED0",
                                        }}>Submitted on June 01, 2024</Typography>
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "12px",
                                            lineHeight: "20px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                        }}>Rejected - Waiting for approval
                                            from HR.</Typography>
                                    </Box>
                                    <Box>
                                        <DriveFileRenameOutlineIcon sx={{ fontSize: "14px", color: "#018CEA" }} />
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "5px" }}>
                                    <Typography sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        letteSpacing: "-2%",
                                        color: "#0171BC"
                                    }}>View all</Typography>
                                    <ArrowRightAltRoundedIcon sx={{ color: "#0171BC" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="activityReports">
                            <Box sx={{ marginTop: "20px" }}>
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize: "10px",
                                    lineHeight: "20px",
                                    letteSpacing: "-2%",
                                    color: "#A3AED0",
                                    marginBottom: "10px"
                                }}>Pending Reports</Typography>
                                <Typography sx={{
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "32px",
                                    letteSpacing: "-2%",
                                    color: "#1B2559",
                                    marginBottom: "20px"
                                }}>Activity Reports</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", gap: "10px" }}>
                                        <Box sx={{ height: "41px", width: '4px', backgroundColor: "#018CEA", borderRadius: "16px" }}></Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Joe West</Typography>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>Today, 16:36</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "24px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                            textAlign: "right",
                                            borderBottom: "1px solid red"
                                        }}>
                                            Pending Approval
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", gap: "10px" }}>
                                        <Box sx={{ height: "41px", width: '4px', backgroundColor: "#018CEA", borderRadius: "16px" }}></Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Barry Allen</Typography>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>23 Jun, 13:06</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "24px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                            textAlign: "right",
                                            borderBottom: "1px solid red"
                                        }}>
                                            Pending Approval
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box sx={{ display: "flex", gap: "10px" }}>
                                        <Box sx={{ height: "41px", width: '4px', backgroundColor: "#018CEA", borderRadius: "16px" }}></Box>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                letteSpacing: "-2%",
                                                color: "#1B2559"
                                            }}>Felicity Smoke</Typography>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "12px",
                                                lineHeight: "20px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0"
                                            }}>21 Jun, 19:04</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            lineHeight: "24px",
                                            letteSpacing: "-2%",
                                            color: "#E11E1E",
                                            textAlign: "right",
                                            borderBottom: "1px solid red"
                                        }}>
                                            Pending Approval
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "5px" }}>
                                    <Typography sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        lineHeight: "28px",
                                        letteSpacing: "-2%",
                                        color: "#0171BC",
                                        // marginTop: "10px"
                                    }}>View all Pending Report</Typography>
                                    <ArrowRightAltRoundedIcon sx={{ color: "#0171BC", }} />
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Root>
    )
}

export default NewDashboard