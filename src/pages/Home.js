import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ATRLinechart from '../components/ATRLinechart';
import FiftyandHund from '../components/FiftyandHund';
import WinsLossPie from '../components/WinsLossPie';
import Serieswinlose from '../components/Serieswinlose';
import Bestbowler from '../components/Bestbowler';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

function Home() {
    return (
        <Box >
            <Box mt={-6} ml={5} sx={{ boxShadow: 7, backgroundColor: '#75ade2' }} >
                <Typography ml={5} fontWeight={900} fontSize={35} >Key metrics to look at</Typography>
            </Box>
            <Box >
                <Grid container spacing={1} mt={-3} >
                    <Grid item xs={10} sm={12} md={5} height='75vh' ml='75px' mt={5} >
                        <Card  >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="399"
                                    image="https://thecricketlounge.com/wp-content/uploads/2023/02/border-gavaskar-trophy.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Border Gavaskar Trophy
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The Border-Gavaskar Trophy is a Test cricket series played between India and Australia. It is played via the International Cricket Council's future tours. As of February 2023, India retained the trophy after defeating Australia in the first two Tests of the 2023 series.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} height='60vh' ml='75px' mt={15} >
                        <h2>Head to head match results since 1991/92</h2>
                        <WinsLossPie />
                    </Grid>
                    <Grid item xs={12} md={5} height='60vh' ml='75px' mt={10} >
                        <h2>Head to head series results since 1991/92</h2>
                        <h3>2 for India winning the series, 1 for a drawn series 0 when India lost.</h3>
                        <Serieswinlose />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} height='60vh' ml='75px' mt={19} >
                        <h2>Leading scorers</h2>
                        <ATRLinechart />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} height='60vh' ml='75px' mt={14} >
                        <h2>Fifties and Hundreds</h2>
                        <FiftyandHund />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} height='60vh' ml='75px' mt={12} >
                        <h2>Leading bowlers</h2>
                        <Bestbowler />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default Home;