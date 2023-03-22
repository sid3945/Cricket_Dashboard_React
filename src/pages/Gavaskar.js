import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Gavaskarinausind, Gavaskaryearwise, Gavaskarpartnerships, Gavaskarmostdismissals } from '../components/Gavaskarinausind';

function Gavaskar() {
  return (
      <Box >
        <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
          <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Sunil Gavaskar</Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Gavaskar career runs in Aus and in India</h2>
              <Gavaskarinausind />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Gavaskar yearwise performance against Aus till 1986</h2>
              <Gavaskaryearwise />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={15}>
              <h2>Gavaskar's top partnerships</h2>
              <Gavaskarpartnerships />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Who got him?</h2>
              <Gavaskarmostdismissals />
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default Gavaskar