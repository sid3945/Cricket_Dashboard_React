import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Viratinausind, Viratyearwise, Viratpartnerships, Viratmostdismissals } from '../components/Viratinausind';

function Virat() {
  return (
      <Box >
        <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
          <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Virat Kohli</Typography>
        </Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={5}>
            <h2>Virat career runs in Aus and in India</h2>
            <Viratinausind />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Virat yearwise performance against Aus till 2023</h2>
            <Viratyearwise />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Virat's top partnerships against Aus</h2>
            <Viratpartnerships />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Who got him?</h2>
            <Viratmostdismissals />
          </Grid>
        </Grid>
      </Box>
    </Box>


  )
}

export default Virat