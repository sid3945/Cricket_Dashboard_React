import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Warnerinausind, Warneryearwise, Warnerpartnerships, Warnermostdismissals } from '../components/Warnerinausind';

function Warner() {
  return (
    <Box >
    <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
      <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at for David Warner</Typography>
    </Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Warner career runs in Aus & in India</h2>
            <Warnerinausind />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Warner yearwise performance against India till 2023</h2>
            <Warneryearwise />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={15}>
            <h2>Warner's top partnerships against India</h2>
            <Warnerpartnerships />
          </Grid>
          <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={10}>
            <h2>Who got him?</h2>
            <Warnermostdismissals />
          </Grid>
        </Grid>
      </Box>
    </Box>


  )
}

export default Warner