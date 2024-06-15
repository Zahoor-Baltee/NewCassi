import { Box, Typography, colors } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Button from "@mui/material/Button";



const Root = styled(Box)({
    margin: 0,
    textField: {
        backgroundColor: 'lightblue', // Your background color
        '& input::placeholder': {
            color: 'rgba(0, 0, 0, 0.5)' // Adjust the opacity or color of the placeholder text
        }
    },
    "& .mainContainer": {
        backgroundColor: "#f3f3f3",
        padding: "40px",
        height: "calc(100vh - 16px)",
        display: "flex",
        flexDirection: 'column',
        gap: "50px",
        "& .MuiButtonBase-root": {
            textTransform: "none",
            // borderRadius: "10px"
        },
        "& .uiBox-root": {
            backgroundColor: "green",
        },
        "& .MuiListItem-root": {
            width: "90%",
            margin: "20px"
        },
        "& .textAreaa": {
            width: "930px",
            height: "100px",
            padding: "10px",
            border: "none",
            backgroundColor: "#C9E9F7",
            borderRadius: "0px 0px 5px 5px"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'transparent',
                backgroundColor: "#C9E9F7",
            },
        },

    },
});
const EnterExpenseReport = () => {
    const [category, setCategory] = React.useState('');
    const CategoryhandleChange = (event) => {
        setCategory(event.target.value);
    }
<<<<<<< HEAD
    const [value, setValue] = React.useState('');


=======
    const [amount, setAmount] = React.useState('');
    const AmounthandleChange = (event) => {
        setAmount(event.target.value);
    };
    const [date, setDate] = React.useState('');
    const DatehandleChange = (event) => {
        setDate(event.target.value);
    };
>>>>>>> ec01cc83c67c478e0f2c230bff439ff427e71ccf
    return (
        <Root>
            <Box className="mainContainer" >
                <Box sx={{
                    height: "350px", backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // gap: "50px",
                    borderRadius: "10px",
                    boxShadow: 0
                }}>
                    <Box>
                        <FormControl sx={{ m: 1, width: "300px", }}>
                            <Select
                                value={category}
                                onChange={CategoryhandleChange}
                                displayEmpty
                            >
                                <MenuItem value="" >
                                    <em>Select a Category</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ m: 1, width: "300px" }}
                            label="Basic Input"
                            variant="outlined"
                            value={amount}
                            onChange={AmounthandleChange}
                            fullWidth
                        />
                        <TextField sx={{ m: 1, width: "300px" }}
                            label="Basic Input"
                            variant="outlined"
                            value={date}
                            onChange={DatehandleChange}
                            fullWidth
                        />

                    </Box>
                    <Box >
                        <Typography sx={{
                            padding: "10px", backgroundColor: "#C9E9F7", borderRadius: "5px 5px 0px 0px"
                        }}>Add a description</Typography>
                        <textarea className="textAreaa" aria-label="minimum height" minRows={3} />

                    </Box>

                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ border: "1px solid ", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", height: "60px", width: "60px" }}>
                                <MicRoundedIcon sx={{ fontSize: "30px" }} />

                            </Box>
                            <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>Record your report</Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ border: "1px solid ", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", height: "60px", width: "60px" }}>
                                <DocumentScannerIcon sx={{ fontSize: "30px" }} />
                            </Box>
                            <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>Scan your report</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex", justifyContent: "end", gap: "40px"
                }}>
                    <Button variant="outlined" color="error">
                        Reset
                    </Button>
                    <Button variant="contained">Submit</Button>
                </Box>
            </Box>


        </Root>
    );
};

export default EnterExpenseReport;
