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
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
            // width: "259px",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px"
        },
        "& .newClients": {
            minwidth: "257px",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: "center",
            padding: "24px 10px"
        },
        "& .earning": {
            // width: "257px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            display: 'flex',
            gap: "20px",
            alignItems: "center",
            padding: "10px"
        },
        "& .activity": {
            // width: "257px",
            borderRadius: "20px",
            backgroundColor: "#0171BB",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px"
        },
        "& .secondSection": {
            // width: "475px",
            height: "325px",
            borderRadius: "20px",
            backgroundColor: " #FFFFFF",
            // BorderTop: "1px dashed red"

        },
        "& .expenseReportPerDay": {
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 20px 0px 20px",
        },
        "& .absenceRequests": {
            // width: "227px",
            // height: "345px",
            borderRadius: "5px",
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
                {/* <Box className="headerSection">
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
                </Box> */}
                {/* --------------------First Section--------------- */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>

                    {/* --------------------First Section Complete--------------- */}
                    {/* --------------------Second Section Start--------------- */}

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Item>
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
                                </Item>
                            </Grid>
                            <Grid item xs={3} container flexDirection={"column"} rowGap={3}>
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
                                            color: "#B3B3B3"
                                        }}>Number os Employees</Typography>
                                        <Typography sx={{
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            lineHeight: "32px",
                                            color: "#1B2559"
                                        }}>321</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#fff", padding: "28px 10px !important", justifyContent: "space-between" }}>
                                    <Box >
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            color: "#1B2559"
                                        }}>Rejected expense report</Typography>
                                        <Typography sx={{
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            color: "#B3B3B3"
                                        }}>Month of June</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            lineHeight: "28px",
                                            letteSpacing: "-2%",
                                            color: "#0171bc",
                                        }}>38</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={3} container flexDirection={"column"} rowGap={3}>
                                <Box className="newClients">
                                    <Box sx={{ height: "56px", width: "56px", borderRadius: "50%", backgroundColor: "#0171BB", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <PeopleAltIcon sx={{ color: "#ffffff" }} />
                                    </Box>
                                    <Box className="">
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "14px",
                                            color: "#B3B3B3"
                                        }}>number of approved</Typography>
                                        <Typography sx={{
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            lineHeight: "32px",
                                            color: "#1B2559"
                                        }}>35</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#fff", padding: "28px 10px !important", justifyContent: "space-between" }}>
                                    <Box >
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            color: "#1B2559"
                                        }}>Rejected activity report</Typography>
                                        <Typography sx={{
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            color: "#B3B3B3"
                                        }}>Month of June</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            lineHeight: "28px",
                                            letteSpacing: "-2%",
                                            color: "#0171bc",
                                        }}>38</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#fff", padding: "28px 10px !important", justifyContent: "space-between" }}>
                                    <Box >
                                        <Typography sx={{
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            color: "#1B2559"
                                        }}>Approved expense report</Typography>
                                        <Typography sx={{
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            color: "#B3B3B3"
                                        }}>Month of June</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            lineHeight: "28px",
                                            letteSpacing: "-2%",
                                            color: "#0171bc",
                                        }}>38</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* --------------------Second Section End--------------- */}
                    {/* --------------------Third Section Start--------------- */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Box className='absenceRequests'>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0",
                                                // marginBottom: "5px"
                                            }}>Month of June</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#1B2559",
                                                }}>Pending Absence Requests</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#0171bc",
                                                }}>38</Typography>
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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <ArrowRightIcon sx={{ fontSize: "24px", color: "red" }} />
                                                <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "red" }}>illness</Typography>
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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <ArrowRightIcon sx={{ fontSize: "24px", color: "red" }} />
                                                <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "red" }}>illness</Typography>
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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <ArrowRightIcon sx={{ fontSize: "24px", color: "red" }} />
                                                <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "red" }}>illness</Typography>
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
                            </Grid>
                            <Grid item xs={3}>
                                <Box className='absenceRequests'>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0",
                                                // marginBottom: "20px"
                                            }}>Month of June</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#1B2559",
                                                }}>Recent Activity</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#0171bc",
                                                }}>38</Typography>
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
                                                }}>Rejected Expence Report</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                                                }}>Pannding Validation</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                                                }}>Pending Abaence Report</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                            </Grid>
                            <Grid item xs={3}>
                                <Box className='absenceRequests'>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0",
                                                // marginBottom: "5px"
                                            }}>Month of June</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#1B2559",
                                                }}>Pending Activity Reports</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#0171bc",
                                                }}>38</Typography>
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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                            </Grid>
                            <Grid item xs={3}>
                                <Box className='absenceRequests'>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                lineHeight: "24px",
                                                letteSpacing: "-2%",
                                                color: "#A3AED0",
                                                // marginBottom: "5px"
                                            }}>Month of June</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#1B2559",
                                                }}>Pending Activity Reports</Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    fontWeight: 700,
                                                    fontSize: "18px",
                                                    lineHeight: "28px",
                                                    letteSpacing: "-2%",
                                                    color: "#0171bc",
                                                }}>38</Typography>
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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                                                }}>Carlos Fonte</Typography>
                                                <Typography sx={{
                                                    fontWeight: 500,
                                                    fontSize: "12px",
                                                    lineHeight: "20px",
                                                    letteSpacing: "-2%",
                                                    color: "#A3AED0",
                                                }}>12 May 2024</Typography>

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
                            </Grid>

                        </Grid>
                    </Box>
                    {/* --------------------Third Section End--------------- */}
                </Box>
            </Box>
        </Root>
    )
}

export default NewDashboard