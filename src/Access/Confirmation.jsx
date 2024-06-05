import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import forgotPassword from "../Assets/confirmation.jpeg";
import SubmitLoader from "../Componenets/SubmitLoader";
import Alert from "../Componenets/Alert";

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
        width: "130px",
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
      "& .MuiTypography-root": {
        marginLeft: "5px",
        marginBottom: "5px",
      },
      "& .MuiButtonBase-root": {
        textTransform: "none",
        borderRadius: "10px",
      },
    },
  },
});
const Confirmation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    color: "primary",
    message: "successfull",
    isOpen: false,
  });
  const handleConformation = () => {
    setIsLoading(true);
    setAlert({
      ...alert,
      color: "success",
      message: "Api complete ",
      isOpen: true,
    });
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
              marginBottom: 40,
            }}
          >
            <Box className="logo">
              <img src={forgotPassword} width="100%" alt="logo" />
            </Box>
          </Box>
          <Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography fontWeight="bold" variant="h6">
                  Confirmation
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                <Typography>
                  A link to reset your password has been sent to your Email.
                </Typography>
              </Box>
            </Box>

            <Box>
              <Button
                onClick={handleConformation}
                size="large"
                variant="contained"
                fullWidth
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* {isLoading ? <SubmitLoader /> : ""} */}
      {alert.isOpen ? (
        <Alert
          open={alert.isOpen}
          message={alert.message}
          color={alert.color}
        />
      ) : (
        ""
      )}
    </Root>
  );
};

export default Confirmation;
