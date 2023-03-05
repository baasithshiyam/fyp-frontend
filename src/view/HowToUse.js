
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
    height: 55,
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
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
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
                <Typography variant="h5" align="center">
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
                <Typography variant="h5" align="center">
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
                <Typography variant="h5" align="center">
                  Deepfake Detection Report
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="#"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
        </div>
    );
}

export default HowToUse;