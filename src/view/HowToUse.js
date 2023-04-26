
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';


const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };
  
  const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: '#ffff',
    fontWeight: 'medium',
  };
  
  const image = {
    height: 100,
    my: 4,
  };


function HowToUse(props) {
    return (
        <div>
             <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={process.env.PUBLIC_URL+"statics/productCurvyLines.png"}
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        {/* <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography> */}
        <h1 className='font-weight-bold display-4'>How it works</h1>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL+"statics/upload.png"}
                  alt="upload"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                    Upload an Image
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL+"statics/face-detection.png"}
                  alt="face detection"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                    Deepfake Detection
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL+"statics/report.png"}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                   Detection Report
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        {/* <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/demo"
          sx={{ mt: 8 }}
        >
          Get started
        </Button> */}

        <a href='/demo' className='mt-4'><button className='btn btn-primary btn-lg font-weight-bold'>Get started
                <i class="fa fa-external-link ml-2" ></i></button></a>
      </Container>
    </Box>
        </div>
    );
}

export default HowToUse;