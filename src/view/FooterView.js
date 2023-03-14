import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';


function Copyright() {
    return (
      <React.Fragment>
        {'© '}
        <Link color="inherit" href="https://baasithshiyam.github.io/portfolio/">
          My Website
        </Link>{' '}
        {new Date().getFullYear()}
      </React.Fragment>
    );
  }


  const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    mr: 1,
    '&:hover': {
      bgcolor: '#0000',
    },
  };
  
  // const LANGUAGES = [
  //   {
  //     code: 'en-US',
  //     name: 'English',
  //   },
  //   {
  //     code: 'fr-FR',
  //     name: 'Français',
  //   },
  // ];

function FooterView(props) {
    return (
        <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#f3e6ff' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://www.linkedin.com/in/baasith/" sx={iconStyle}>
                  <img
                    src={process.env.PUBLIC_URL+"statics/linkedin.png"}
                    alt="Linkedin"
                    style={{width: 48,
                        height: 48}}
                  />
                </Box>
                <Box component="a" href="https://medium.com/@baasith-shiyam1" sx={iconStyle}>
                  <img
                    src={process.env.PUBLIC_URL+"statics/medium.png"}
                    alt="Medium"
                    style={{width: 48,
                        height: 48}}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            {/* <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField> */}
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Deepfake © All rights reserved. | Powered by '}
              
              <Link
                href="https://baasithshiyam.github.io/portfolio/"
                title="Website Abdul baasith"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abdul Baasith
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
    );
}

export default FooterView;