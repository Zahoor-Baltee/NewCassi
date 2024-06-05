import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import forgotPassword from '../Assets/confirmation.jpeg'

const Root = styled(Box)({
    margin: 0,
    "& .mainContainer": {
        width: "100%",
        height: "calc(100vh - 16px)",
        display: "flex",
        alignItems: "center",
        "& .content": {
            display: "grid",
            width: "35vw",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            // boxShadow: "0px 2px 12px 2px #cccccc",
            "& .logo": {
                display: 'flex',
                justifyContent: "center",
                width: "200px"
            },
            "& .textField": {
                marginBottom: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    backgroundColor: '#EBEBEB',
                    zIndex: -1
                },
                "& .MuiOutlinedInput-root": {
                    borderRadius: "10px"
                }

            },
            "& .MuiTypography-root": {
                marginLeft: '5px',
                marginBottom: "5px",
            },
            "& .MuiButtonBase-root": {
                width: "300px",
                textTransform: "none",
                borderRadius: "10px"
            }

        },
    },
});
const Confirmation = () => {


    return (
        <Root>
            <Box className="mainContainer">
                <Box className="content" >
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 40 }}>
                        <Box className='logo'>
                            <img src={forgotPassword} width='100%' alt="logo" />
                        </Box>
                    </Box>
                    <Box>
                        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: '15px' }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontWeight='bold' variant="h6">Confirmation</Typography>
                            </Box>
                            <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                                <Typography >A link to reset your password has been sent to  your Email.</Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                        }
                        }>
                            <Button size="large" variant="contained" fullWidth>
                                Done
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Root>
    );
};

export default Confirmation;
