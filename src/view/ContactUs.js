
import {TextField} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Snackbar from '../components/Snackbar';

function ContactUs(props) {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // bgcolor: '#e8d4fc',
              py: 3,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              {/* <Typography variant="h2" component="h2" gutterBottom>
                Contact The Developer 
              </Typography> */}

              <h1 className='font-weight-bold mb-3'>Contact the developer</h1>
              <p className='text-secondary'>Unmask the Truth: Stop Deepfakes with Our Detection Software</p>
              {/* <Typography variant="h5">
              Unmask the Truth: Stop Deepfakes with Our Detection Software
              </Typography> */}
              <TextField
                label="Your email"
                variant="filled"
                sx={{ width: '100%', mt: 0, mb: 2 }}
              />
              {/* <Button
                type="submit"
                color="primary"
                // variant="contained"
                sx={{ width: '100%' }}
              >
                feel free to contact
              </Button> */}

              <button className='btn btn-primary font-weight-bold'>Say Hi !</button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/statics/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://plus.unsplash.com/premium_photo-1661371767935-aeeb44523816?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
    );
}

export default ContactUs;