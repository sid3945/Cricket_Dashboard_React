import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Pujarainausind, Pujarayearwise, Pujarapartnerships, Pujaramostdismissals } from '../components/Pujarainausind';

function Virat() {
  return (
    <Box >
      <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
        <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Cheteshwar Pujara</Typography>
      </Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Pujara career runs in Aus and in India</h2>
            <Pujarainausind />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Pujara yearwise performance against Aus till 2023</h2>
            <Pujarayearwise />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={15}>
            <h2>Pujara's top partnerships against Aus</h2>
            <Pujarapartnerships />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Who got him?</h2>
            <Pujaramostdismissals />
          </Grid>
        </Grid>
      </Box>
    </Box>


  )
}

export default Virat