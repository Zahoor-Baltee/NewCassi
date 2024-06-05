import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
const Root = styled(Box)({
  margin: 0,
  "& .mainContainer": {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c4c4c4db",
  },
});
const SubmitLoader = () => {
  return (
    <Root>
      <Box className="mainContainer">
        <CircularProgress />
      </Box>
    </Root>
  );
};

export default SubmitLoader;
