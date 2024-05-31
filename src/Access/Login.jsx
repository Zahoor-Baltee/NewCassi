import React, { useState } from "react";
import {Box, Checkbox} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
// import logo from '../Assets/logoe.png'
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
      "& .logo":{
        display:'flex',
        justifyContent:"center",
        width:"200px"
      },
      "& .textField":{
        marginBottom:"10px"
      },
      "& .checkboxSec":{
        display:"flex",alignItems:"center",

        "& Checkbox":{
          merginLeft:"-5px"
        }
      }
    },
  },
});
const Login = () => {
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
          {/* <Box className='logo'>
         <img src={logo} width='100%' alt="logo"/>
          </Box> */}
         <Box sx={{textAlign:"center"}}>
         <Typography variant="h6">Enter your email and password to login</Typography>
         </Box>

          <Box>
            <Typography variant="body1">Email</Typography>
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
              placeholder="Enter Email"
              error={condition && !data?.email}
              helperText={condition && !data?.email && "Enter Email"}
            />
          </Box>
          <Box>
            <Typography variant="body1">Password</Typography>
            <TextField
              required
              fullWidth
              className="textField"
              size="small"
              name="password"
              value={data?.password || ""}
              onChange={handleChange}
              type="password"
              id="password"
              placeholder="Enter Password"
              error={condition && !data?.password}
              helperText={condition && !data?.password && "Enter Password"}
            />
          </Box>
          <Box className="checkboxSec">
            <Checkbox  defaultChecked />
            <Typography variant="body1">Rememeber me next time</Typography>
          </Box>
            <Button size="large" variant="contained" fullWidth onClick={handleLogIn}>
              LogIn
            </Button>
        </Box>
      </Box>
    </Root>
  );
};

export default Login;
