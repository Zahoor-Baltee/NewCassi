import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptIcon from '@mui/icons-material/Receipt';

const Root = styled(Box)({
  margin: 0,
  "& .mainContainer": {
    backgroundColor: "#f3f3f3",
    padding: "40px",
    height: "calc(100vh - 16px)",
    "& .MuiButtonBase-root": {
      textTransform: "none",
      borderRadius: "10px"
    },
    "& .uiBox-root": {
      backgroundColor: "green",
    },
    "& .MuiListItem-root": {
      width: "90%",
      margin: "20px"
    }
  },
});
const Homepage = () => {
  return (
    <Root>
      <Box className="mainContainer">
        <Box
          sx={{
            height: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: 0

          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px",
            }}
          >
            <Typography sx={{ fontWeight: "600", fontSize: "20px", color: "#1976d2" }}>Enter a Report</Typography>
            <AddCircleOutlineIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Button variant="contained" size="large" sx={{ height: "50px", display: "flex", gap: "10px" }}>
                <ReceiptIcon />
                Enter a new expense report
              </Button>
              <Button variant="contained" size="large" sx={{ height: "50px", display: "flex", gap: "10px" }}>
                <CalendarMonthIcon />
                Enter a new activiy report
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "600"
          }}>Dashboard</Typography>

        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "40px",
          }}
        >
          <Box sx={{
            width: "90%"
          }}>
            <Box
              sx={{
                borderRadius: "20px",
                backgroundColor: "#CCE5EF"
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <Box sx={{ display: "flex", justifyContent: "space-between", padding: "0px 20px" }}>
                    <Typography>Expense Report</Typography>
                    <Typography>May 2024</Typography>
                  </Box>
                  <Box>
                    <Typography sx={
                      {
                        padding: "0px 20px"
                      }
                    }>16 reports found</Typography>
                  </Box>
                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Box>
          <Box sx={{
            width: "90%"
          }}>
            <Box
              sx={{
                // maxWidth:"600px",
                borderRadius: "20px",
                backgroundColor: "#CCE5EF"
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <Box sx={{ display: "flex", justifyContent: "space-between", padding: "0px 20px" }}>
                    <Typography>Expense Report</Typography>
                    <Typography>May 2024</Typography>
                  </Box>
                  <Typography sx={{ padding: "0px 20px", display: "flex" }
                  }><FiberManualRecordIcon />Validated</Typography>

                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                  <ListItem sx={{ backgroundColor: "#b3dced", borderRadius: "20px" }}>
                    <ListItemText primary="Approved" />
                    <Typography>16</Typography>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Box>
        </Box>
      </Box>
    </Root>
  );
};

export default Homepage;
