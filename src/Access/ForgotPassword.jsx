import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
// import MarkunreadIcon from '@mui/icons-material/Markunread';
import forgotPassword from '../Assets/forgotPassword.jpeg'
import { Link } from "react-router-dom";

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
            boxShadow: "0px 2px 12px 2px #cccccc",
            "& .logo": {
                display: 'flex',
                justifyContent: "center",
                width: "237px"
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
            "& .MuiButtonBase-root": {
                borderRadius: "10px"
            },
            "& .MuiTypography-root": {
                marginLeft: '5px',
                marginBottom: "5px",
            },
            "& .MuiButtonBase-root": {
                textTransform: "none",
                borderRadius: "10px"
            }

        },
    },
});
const ForgotPassword = () => {
    const [data, setData] = useState({});
    const [condition, setCondition] = useState(false);

    const handleChange = (event) => {
        setData((pre) => ({ ...pre, [event.target.name]: event.target.value }));
    };

    const handleLogIn = () => {
        setCondition(true);
        console.log(data);

    };

    return (
        <Root>
            <Box className="mainContainer">
                <Box className="content" >
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 40 }}>
                        <Box className='logo'>
                            <img src={forgotPassword} width='100%' alt="logo" />
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "center", flexDirection: 'column', gap: '10px' }}>
                        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: '15px' }}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography fontWeight='bold' variant="h6">Forgot Password</Typography>
                            </Box>
                            <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                                <Typography >Enter your Email and we'll send you a link to reset your password</Typography>
                            </Box>
                        </Box>

                        <Box style={{ display: "flex", justifyContent: "center", flexDirection: 'column', gap: '10px' }}>
                            <Box>
                                <Typography color='#777474' variant="body1">Email</Typography>
                                <TextField
                                    className="textField"
                                    required
                                    fullWidth
                                    type="email"
                                    id="email"
                                    size="small"
                                    name="email"
                                    value={data?.email || ""}
                                    onChange={handleChange}
                                    placeholder="abc@email.com"
                                    error={condition && !data?.email}
                                    helperText={condition && !data?.email && "Enter  your email"}

                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position="start">
                                //             <MarkunreadIcon />
                                //         </InputAdornment>
                                //     ),
                                // }}
                                />
                            </Box>
                            <Button size="large" variant="contained" fullWidth onClick={handleLogIn}>
                                Submit
                            </Button>
                            <Box>
                                <Link
                                    href="login.jsx"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'primary', // Inherit color from parent
                                        textAlign: 'end',
                                        marginBottom: 2,
                                    }}
                                >
                                    <Typography variant="body2">Back to login</Typography>

                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Root>
    );
};

export default ForgotPassword;
