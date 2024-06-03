import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";

import logo from "../Assets/Caasi-croped-logo.png";
import { UserServices } from "../Services/User/UserServices";

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
        display: "flex",
        justifyContent: "center",
        width: "237px",
      },
      "& .textField": {
        marginBottom: "10px",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          backgroundColor: "#EBEBEB",
          zIndex: -1,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
      },
      "& .MuiButton-root": {
        borderRadius: "10px",
        textTransform: "none",
      },
    },
  },
});
const Login = () => {
  const [data, setData] = useState({});
  const [condition, setCondition] = useState(false);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogIn = async () => {
    try {
      let res = await UserServices.loginUser(data);
      if (res.success) {
      } else {
        alert(res.mesage);
      }
    } catch (error) {
      console.log(error);
    }

    setCondition(true);
  };

  return (
    <Root>
      <Box className="mainContainer">
        <Box className="content">
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="logo">
              <img src={logo} width="100%" alt="logo" />
            </Box>
          </Box>
          <Box sx={{ textAlign: "start", marginBottom: 3 }}>
            <Typography variant="h4">Wellcome!</Typography>
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
              helperText={condition && !data?.email && "Enter your Email"}
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
              helperText={condition && !data?.password && "Enter your Password"}
            />
          </Box>
          <Link
            href=""
            sx={{
              textDecoration: "none",
              color: "primary", // Inherit color from parent
              textAlign: "end",
              marginBottom: 2,
            }}
          >
            <Typography variant="body2">Forget Password?</Typography>
          </Link>
          <Button
            size="large"
            variant="contained"
            fullWidth
            onClick={handleLogIn}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Root>
  );
};

export default Login;
