import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Steveinausind, Steveyearwise, Stevepartnerships, Stevemostdismissals } from '../components/Steveinausind';

function Steve() {
  return (
      <Box >
        <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
          <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Steve Smith</Typography>
        </Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Steve career runs in Aus & in India</h2>
            <Steveinausind />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Steve yearwise performance against India till 2023</h2>
            <Steveyearwise />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Steve's top partnerships against India</h2>
            <Stevepartnerships />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Who got him?</h2>
            <Stevemostdismissals />
          </Grid>
        </Grid>
      </Box>
    </Box>


  )
}

export default Steve