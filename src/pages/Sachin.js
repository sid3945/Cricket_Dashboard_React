import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Sachininausind, Sachinyearwise, Sachinpartnerships, Sachinmostdismissals } from '../components/Sachininausind';

function Sachin() {
  return (
      <Box >
        <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
          <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Sachin Tendulkar</Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Sachin career runs in Aus and in India</h2>
              <Sachininausind />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Sachin yearwise performance against Aus till 2013</h2>
              <Sachinyearwise />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={15}>
              <h2>Sachin's top partnerships</h2>
              <Sachinpartnerships />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Who got him?</h2>
              <Sachinmostdismissals />
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default Sachin