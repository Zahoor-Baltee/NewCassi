import { Autocomplete, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function Filters() {

  const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
]
  return (
  <>
  <Grid container md={12} xs={12} spacing={1}>
    <Grid item xs={6} md={3}>
      <Typography>Country</Typography>
      <Autocomplete fullWidth id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} placeholder='--All--' inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Province</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>City</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password' }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Area</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password',  }} placeholder='--All--' />
      )}
    />
    </Grid>
  </Grid>

  <Grid container md={12} xs={12} spacing={1}>
    <Grid item xs={6} md={3}>
      <Typography>Vendor</Typography>
      <Autocomplete fullWidth id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} placeholder='--All--' inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Station</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Department</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password' }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Sub Department</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password',  }} placeholder='--All--' />
      )}
    />
    </Grid>
  </Grid>
  <Grid container md={12} xs={12} spacing={1}>
    <Grid item xs={6} md={3}>
      <Typography>Employee Group</Typography>
      <Autocomplete fullWidth id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} placeholder='--All--' inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Designation</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Division</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password' }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Employee Code</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password',  }} placeholder='--All--' />
      )}
    />
    </Grid>
  </Grid>
  <Grid container md={12} xs={12} spacing={1}>
    <Grid item xs={6} md={3}>
      <Typography>Employee Name</Typography>
      <Autocomplete fullWidth id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} placeholder='--All--' inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>User Name</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Status</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password' }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Employee Status</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password',  }} placeholder='--All--' />
      )}
    />
    </Grid>
  </Grid>
  <Grid container md={12} xs={12} spacing={1}>
    <Grid item xs={6} md={3}>
      <Typography>Document Attached</Typography>
      <Autocomplete fullWidth id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} placeholder='--All--' inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Roles Template</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Emirate ID/Cnic # </Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password' }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Flag</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password',  }} placeholder='--All--' />
      )}
    />
    </Grid>
  </Grid>
  <Grid container md={12} xs={12} spacing={1}>
    <Grid item xs={6} md={3}>
      <Typography>Employee Reports To</Typography>
      <Autocomplete fullWidth id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} placeholder='--All--' inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Blacklist/Whiitelist</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password', }} placeholder='--All--' />
      )}
    />
    </Grid>
        <Grid item xs={6} md={3}>
      <Typography>Position Code</Typography>
      <Autocomplete id="country-select-demo" size='small' options={countries} autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} inputProps={{ ...params.inputProps, autoComplete: 'new-password' }} placeholder='--All--' />
      )}
    />
    </Grid>
  </Grid>
  <Grid container marginTop={2} gap={1}>
    <Button variant='contained' size='small'> Apply</Button>
    <Button variant='outlined' size='small'>Clear Filters</Button>
  </Grid>
  
  </> 
  
  )
}

export default Filters
