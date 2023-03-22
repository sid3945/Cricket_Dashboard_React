import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Borderinausind, Borderyearwise, Borderpartnerships, Bordermostdismissals } from '../components/Borderinausind';

function Border() {
  return (
      <Box >
        <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
          <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Allan Border</Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Border career runs in Aus and in India</h2>
              <Borderinausind />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Border yearwise performance against Aus till 1992</h2>
              <Borderyearwise />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={15}>
              <h2>Border's top partnerships</h2>
              <Borderpartnerships />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Who got him?</h2>
              <Bordermostdismissals />
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default Border