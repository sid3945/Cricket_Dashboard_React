import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Rohitinausind, Rohityearwise, Rohitpartnerships, Rohitmostdismissals } from '../components/Rohitinausind';

function Rohit() {
  return (
      <Box >
        <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
          <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Rohit Sharma</Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2 >Rohit career runs in Aus and in India</h2>
              <Rohitinausind />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Rohit yearwise performance against Aus till 2023</h2>
              <Rohityearwise />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={15}>
              <h2>Rohit's top partnerships</h2>
              <Rohitpartnerships />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Who got him?</h2>
              <Rohitmostdismissals />
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default Rohit