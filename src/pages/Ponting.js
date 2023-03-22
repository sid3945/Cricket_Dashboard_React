import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Pontinginausind, Pontingyearwise, Pontingpartnerships, Pontingmostdismissals } from '../components/Pontinginausind';

function Ponting() {
  return (
      <Box >
        <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
          <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for Ricky Ponting</Typography>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Ponting career runs in Aus and in India</h2>
              <Pontinginausind />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Ponting yearwise performance against Aus till 1992</h2>
              <Pontingyearwise />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={15}>
              <h2>Ponting's top partnerships</h2>
              <Pontingpartnerships />
            </Grid>
            <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
              <h2>Who got him?</h2>
              <Pontingmostdismissals />
            </Grid>
          </Grid>
        </Box>
      </Box>
  )
}

export default Ponting