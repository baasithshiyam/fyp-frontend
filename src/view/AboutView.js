
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import zIndex from '@mui/material/styles/zIndex';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function AboutView(props) {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', }}
    >
      <Container sx={{ mt: 15, mb: 3, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={process.env.PUBLIC_URL + "statics/productCurvyLines.png"}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5} style={style.boxSec}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/statics/deepfake.png"}
                alt="deepfake"
                sx={{ height: 100 }}
              />
              {/* <Typography variant="h6" sx={{ my: 5 }}>
                Deepfake Detection 
              </Typography> */}
              <h3 className='font-weight-bold my-4'> Deepfake detection</h3>
              <p className='text-center text-secondary'>From the latest trendy of deepfake will be able to identify deepfakes,get your profile images verified with explaibility features</p>

              {/* <Typography variant="p">
                {
                  'From the latest trendy of deepfake will be able to identify deepfakes'
                }

                {
                  ',get your profile images verified with explaibility features '
                }
              </Typography> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/statics/demonstration.png"}
                alt="Explainability"
                sx={{ height: 100 }}
              />
              {/* <Typography variant="h6" sx={{ my: 5 }}>
                Explainability 
              </Typography>
              <Typography variant="h5">
                {
                  'XAI provides insight into the inner workings of an AI model  '
                }

                {'and helps us understand why it makes certain decisions. This can improve transparency and accountability, and enable us to trust and use AI models with greater confidence.'}
              </Typography> */}

              <h3 className='font-weight-bold my-4'> Explainability</h3>
              <p className='text-center text-secondary'>XAI provides insight into the inner workings of an AI model nd helps us understand why it makes certain decisions. This can improve transparency and accountability, and enable us to trust and use AI models with greater confidence.</p>

            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/statics/insurance.png"}
                alt="Security"
                sx={{ height: 100 }}
              />
              {/* <Typography variant="h6" sx={{ my: 5 }}>
                Security
              </Typography>
              <Typography variant="h5">
                {'Profile image security is important to protect against identity theft, '}
                {'impersonation, and other security threats, and can be improved through privacy settings and verification processes. '}
              </Typography> */}

              <h3 className='font-weight-bold my-4'> Security</h3>
              <p className='text-center text-secondary'>Profile image security is important to protect against identity theft, impersonation, and other security threats, and can be improved through privacy settings and verification processes.</p>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const style = {
  boxSec: {
    zIndex: 9
  }
}

export default AboutView;