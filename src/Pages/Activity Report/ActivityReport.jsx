import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox,
    Typography, Button, Pagination, Menu, MenuItem, Box
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MoreVert } from '@mui/icons-material';
import { styled } from '@mui/system';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StatusButton = styled(Button)(({ status }) => ({
    color: status === 'Approved' ? '#fff' : '#000',
    backgroundColor: status === 'Approved' ? '#4caf50' : status === 'Pending' ? '#ff9800' : '#f44336',
    pointerEvents: 'none',
}));

const tableData = [
    { id: 1, name: 'Albert Flores', lastName: 'Flores', contact: 'has@gmail.com', phone: '(+62) 21-2323-3434', date: '23 Feb 2024', status: 'Approved' },
    { id: 2, name: 'Wade Warren', lastName: 'Warren', contact: 'has@gmail.com', phone: '(+62) 21-2323-3434', date: '23 Feb 2024', status: 'Approved' },
    { id: 3, name: 'Ronald Richards', lastName: 'Richards', contact: 'has@gmail.com', phone: '(+62) 21-2323-3434', date: '23 Feb 2024', status: 'Pending' },
    { id: 4, name: 'Courtney Henry', lastName: 'Courtney', contact: 'has@gmail.com', phone: '(+62) 21-2323-3434', date: '23 Feb 2024', status: 'Rejected' },
    { id: 5, name: 'Courtney Henry', lastName: 'Courtney', contact: 'has@gmail.com', phone: '(+62) 21-2323-3434', date: '23 Feb 2024', status: 'Rejected' },
    { id: 6, name: 'Courtney Henry', lastName: 'Courtney', contact: 'has@gmail.com', phone: '(+62) 21-2323-3434', date: '23 Feb 2024', status: 'Rejected' },
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
        "& .css-1ygcj2i-MuiTableCell-root": {
            width: "25%"
        },
    }
});

function ActivityReport() {
    const [selected, setSelected] = useState([]);
    const [age, setAge] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = tableData.map((row) => row.id);
            setSelected(newSelected);
        } else {
            setSelected([]);
        }
    };

    const handleCheckboxClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

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
                        alignItems: "center"

                    }}>
                        <Button sx={{
                            width: "237px",
                            height: "53px",
                            textTransform: "none"
                        }} variant="contained">Add Activity Report</Button>
                        <Box>
                            <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#fff", color: "#F8F8F8" }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <Typography>Sort by</Typography>
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
                                    <Checkbox
                                        sx={{ color: "#ffffff" }}
                                        indeterminate={selected.length > 0 && selected.length < tableData.length}
                                        checked={tableData.length > 0 && selected.length === tableData.length}
                                        onChange={handleSelectAllClick}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Name</Typography>
                                        <Box className="UpDownIcon">
                                            <ArrowDropUpOutlinedIcon className='upIcon' />
                                            <ArrowDropDownOutlinedIcon className='downIcon' />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Contact</Typography>
                                        <Box className="UpDownIcon">
                                            <ArrowDropUpOutlinedIcon className='upIcon' />
                                            <ArrowDropDownOutlinedIcon className='downIcon' />
                                        </Box>
                                    </Box>

                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Date</Typography>
                                        <Box className="UpDownIcon">
                                            <ArrowDropUpOutlinedIcon className='upIcon' />
                                            <ArrowDropDownOutlinedIcon className='downIcon' />
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Status</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box className="TableTags">
                                        <Typography className='TableTagsTexts'>Action</Typography>

                                    </Box>
                                </TableCell>
                                <TableCell padding="checkbox" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row) => {
                                const isItemSelected = isSelected(row.id);
                                return (
                                    <TableRow
                                        key={row.id}
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                onClick={() => handleCheckboxClick(row.id)}
                                            />
                                        </TableCell>
                                        <TableCell>{row.name} {row.lastName}</TableCell>
                                        <TableCell>{row.contact}<br />{row.phone}</TableCell>
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>
                                            <StatusButton status={row.status}>
                                                {row.status}
                                            </StatusButton>
                                        </TableCell>
                                        <TableCell >
                                            <Box sx={{ display: "flex" }}>
                                                <Box>
                                                    <IconButton
                                                        aria-label="more"
                                                        aria-controls="long-menu"
                                                        aria-haspopup="true"
                                                        onClick={handleMenuClick}
                                                    >
                                                        <MoreVert />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    <IconButton>
                                                        <KeyboardArrowDownIcon />                                                    </IconButton>
                                                </Box>
                                            </Box>
                                            <Menu
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl)}
                                                onClose={handleMenuClose}
                                            >
                                                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                                                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                                            </Menu>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
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

export default ActivityReport;
