import { Box, Typography, colors } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';


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
    const [amount, setAmount] = React.useState('');
    const AmounthandleChange = (event) => {
        setAmount(event.target.value);
    };
    const [date, setDate] = React.useState('');
    const DatehandleChange = (event) => {
        setDate(event.target.value);
    };
    return (
        <Root>
            <Box className="mainContainer">
                <Box sx={{
                    height: "350px", backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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

                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ border: "1px solid ", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", height: "80px", width: "80px" }}>
                                <MicRoundedIcon sx={{ fontSize: "40px" }} />

                            </Box>
                            <Typography sx={{}}>Record your report</Typography>
                        </Box>

                        <Box >
                            <Box sx={{ border: "1px solid ", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", height: "80px", width: "80px" }}>
                                <DocumentScannerIcon sx={{ fontSize: "40px" }} />
                            </Box>
                            <Typography sx={{}}>Scan your report</Typography>
                        </Box>
                    </Box>


                </Box>
            </Box>


        </Root>
    );
};

export default EnterExpenseReport;
