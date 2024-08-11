import React, { useEffect, useState } from 'react'
import { Box, TextField, InputAdornment, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import styled from '@mui/system/styled';
import userImage from '../../Assets/man.png'


import { DataGrid } from '@mui/x-data-grid';

import { UserServices } from '../../Services/User/UserServices';



const Root = styled(Box)({
    "& .userImage": {
        borderRadius: "50px"
    },
    "& .MuiDataGrid-topContainer ": {
        backgroundColor: "#2f80ed !important"
    },
    "& .MuiDataGrid-columnHeader": {
        color: "white",
        backgroundColor: "#2f80ed"
    },
    "& .MuiDataGrid-footerContainer": {
        // backgroundColor: "#d6dcd399"
    },
    "& .MuiDataGrid-iconSeparator": {
        display: "none"

    },
    "& .MuiDataGrid-cell": {
        display: "flex"

    },
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
    const [user, setUser] = useState({
        list: [],
        detail: {}
    })
    let sv = [
        { _id: 1, userName: "sdjks", fullName: "kjdhj", email: "msdn", status: "ksdj", edit: "msdn" }
    ]
    const [age, setAge] = React.useState('');
    const columns = [
        {
            field: 'userName', headerName: ' Name', width: 350, renderCell: (params) => (
                <Box sx={{ display: "flex", justifyContent: "start", gap: "10px", alignItems: "center" }}>
                    <Box sx={{ height: "40px", width: "40px" }}>
                        <img className='userImage' src={userImage} sx={{ borderRadius: "50px !important" }} height='100%' width='100%' alt='lol' />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#000000' }}>Hasnain</Typography>
                </Box>
            )
        },

        { field: 'fullName', headerName: 'Department', width: 335, },
        { field: 'email', headerName: 'Role', width: 280, },
        { field: 'status', headerName: 'Status', width: 230, },
        {
            field: 'edit', headerName: 'Edit', width: 100, renderCell: (params) => (
                <Box >
                    <ModeEditOutlineOutlinedIcon />
                </Box>
            )
        },

    ];
    useEffect(() => {
        getUserList()
    }, [])
    const handleChange = (event) => {
        setAge(event.target.value);
    };


    //Get user List

    const getUserList = async () => {
        try {
            let res = await UserServices.getlist()
            if (res.success) {
                setUser({ ...user, list: res.data })
            } else {
                // alert("failed")
            }

        } catch (error) {
            console.error(error)
        }
    }


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
                                textTransform: "none"
                            }} variant="contained">Create user</Button>
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
                    <DataGrid
                        minHeight={40}
                        rows={sv}
                        columns={columns}
                        getRowId={(e) => e._id}
                        // initialState={{
                        //     pagination: {
                        //         paginationModel: {
                        //             pageSize: 5,
                        //         },
                        //     },
                        // }}
                        pageSizeOptions={[5]}
                        disableColumnFilter
                        disableColumnMenu
                        checkboxSelection
                        hideFooterPagination
                    />
                </Box>

            </Box>
        </Root>
    )
}


export default User