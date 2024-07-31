import React from 'react'
import { Box, TextField, InputAdornment, Divider, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import EnhancedTable from '../Componenets/UsersData';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const Root = styled(Box)({
    margin: 0,
    padding: 0,
    "& .mainContainer": {
        padding: "20px",
        backgroundColor: "#f4f7fe",
        "& .mainBox": {
            backgroundColor: "#F8F8F8",
            borderRadius: "44px 44px 0px 0px ",
            padding: "0px 40px 0px 40px"
        },
        "& .headerSection": {
            display: "flex",
            justifyContent: "space-between",
        },
        " & .inputField": {
            backgroundColor: "#ffffff",
            width: "504px",
            Height: "57.43px",
            borderRadius: "146px"
        }
    }

});
const User = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Root>
            <Box className="mainContainer">

                <Box className="mainBox">
                    {/* --------------------Header Section--------------- */}
                    <Box className="headerSection">

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
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                            <Button sx={{
                                width: "237px",
                                height: "53px",
                                textTransform: "lowercase"
                            }} variant="contained">create user</Button>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#fff", color: "#F8F8F8" }}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <Typography>filters</Typography>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Box>
                    </Box>
                    {/* --------------------Header Section Complete--------------- */}
                </Box>
                <Box>
                    <EnhancedTable />
                </Box>
            </Box>
        </Root>
    )
}


export default User