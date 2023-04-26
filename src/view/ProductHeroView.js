import React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Homelayout from '../components/Homelayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1484725008675-4f26e4824ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
function ProductHeroView(props) {
    return (
        <Homelayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#7fc7d9', // Average color of the background image.
          backgroundPosition: 'center',
        }}
      >
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt="increase priority"
        />

<h1 className='display-2 font-weight-bold text-center'>Detect deepfakes in Low Resource Images</h1>
        {/* <Typography color="inherit" align="center" variant="h2" marked="center">
          Detect deepfake profile images 
        </Typography> */}
        <Typography
          color="inherit"
          align="center"
          variant="p"
          sx={{ mb: 4, mt: { xs: 4, sm: 4 } }}
        >
            Deepfakes, which are AI-generated 
            synthetic media that can mimic the 
            appearance and actions of real people,
             have the potential to be used for malicious purposes such as misinformation, propaganda, and fraud, making them a serious threat to individuals and society as a whole.        </Typography>
        {/* <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          href="/demo"
          sx={{ minWidth: 200 }}
        >
          Try Demo
        </Button> */}
        <a href='/demo' className=''><button className='btn btn-primary btn-lg font-weight-bold'>Get started
                <i class="fa fa-external-link ml-2" ></i></button></a>
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          With Explainable AI (XAI)
        </Typography>
      </Homelayout>
    );
}

export default ProductHeroView;