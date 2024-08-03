import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton,
    Typography, Button, Pagination, Menu, MenuItem, Box
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const tableData = [
    { id: 1, name: 'Top Class Agency', date: '23 Feb 2024', amount: 'ad-hoc', status: 'Delete' },
    { id: 1, name: 'Awesome Agency', date: '23 Feb 2024', amount: 'standard', status: 'Delete' },
    { id: 1, name: 'Top Class Agency', date: '23 Feb 2024', amount: 'ad-hoc', status: 'Delete' },
    { id: 1, name: 'Awesome Agency', date: '23 Feb 2024', amount: 'standard', status: 'Delete' },
    { id: 1, name: 'Top Class Agency', date: '23 Feb 2024', amount: 'ad-hoc', status: 'Delete' },
    { id: 1, name: 'Awesome Agency', date: '23 Feb 2024', amount: 'standard', status: 'Delete' },
    { id: 1, name: 'Top Class Agency', date: '23 Feb 2024', amount: 'ad-hoc', status: 'Delete' },
    { id: 1, name: 'Awesome Agency', date: '23 Feb 2024', amount: 'standard', status: 'Delete' },
    // Add more rows as necessary
];
const Root = styled(Box)({
    margin: 0,
    padding: 0,
    "& .mainContainer": {
        padding: "20px",
        backgroundColor: "#f4f7fe",

        "& .headerSection": {
            display: "flex",
            justifyContent: "space-between",
        },
        "& .TableTags": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        "& .UpDownIcon": {
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            padding: 0,
            margin: 0
        },
        "& .TableTagsTexts": {
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "600"
        },
        "& .upIcon": {
            marginBottom: "-18px",
            padding: "0px",
            color: "#FFFFFF"
        },
        "& .downIcon": {
            margin: 0,
            padding: 0,
            color: "#FFFFFF"
        },
        "& .tableDeleteButton": {
            width: "104px",
            textTransform: "none",
            backgroundColor: "#FF0000",
            color: "#FFFFFF",
        }

    }

});
function ReportsAndExport() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Root>
            <Box className="mainContainer">
                <Box className="headerSection">

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <Typography>Show</Typography>
                        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#fff", color: "#F8F8F8" }}>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <Typography>10</Typography>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Typography>entries</Typography>

                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px"

                    }}>
                        <Button sx={{
                            height: "53px",
                            textTransform: "none"
                        }} variant="contained">create an export to accounting and HR software</Button>
                        <Button sx={{
                            width: "237px",
                            height: "53px",
                            textTransform: "none"
                        }} variant="contained">Generate Report</Button>
                        <Box>
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
                        </Box>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead sx={{ backgroundColor: "#0171BC" }}>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox sx={{ color: "#ffffff" }} />
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Report Name</Typography>
                                        <Box className="UpDownIcon">
                                            <ArrowDropUpOutlinedIcon className='upIcon' />
                                            <ArrowDropDownOutlinedIcon className='downIcon' />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Report Validation</Typography>
                                        <Box className="UpDownIcon">
                                            <ArrowDropUpOutlinedIcon className='upIcon' />
                                            <ArrowDropDownOutlinedIcon className='downIcon' />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Report Type</Typography>
                                        <Box className="UpDownIcon">
                                            <ArrowDropUpOutlinedIcon className='upIcon' />
                                            <ArrowDropDownOutlinedIcon className='downIcon' />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Export</Typography>
                                        <Box className="UpDownIcon">
                                            <ArrowDropUpOutlinedIcon className='upIcon' />
                                            <ArrowDropDownOutlinedIcon className='downIcon' />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography className='TableTagsTexts'>Manage</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography className='TableTagsTexts'>Edit</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell padding="checkbox">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{ fontWeight: "bold" }}>{row.name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography >{row.date}</Typography>
                                    </TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <FileUploadOutlinedIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <Button className='tableDeleteButton' status={row.status}>{row.status}</Button>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={handleMenuClick}>
                                            <CreateOutlinedIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        Showing 1 to 10 of 430 entries
                    </Typography>
                    <Pagination count={1337} color="primary" sx={{ mt: 2 }} />
                </Box>
            </Box>
        </Root >
    );
}

export default ReportsAndExport;
