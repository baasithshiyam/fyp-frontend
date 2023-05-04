import * as React from 'react';
import AppBarView from '../view/AppBarView';

function Help(props) {

    // const theme = createTheme({
    //     palette: {
    //       primary: {
    //         // Purple and green play nicely together.
    //         main: '#140f1a',
    //       },
    //       secondary: {
    //         // This is green.A700 as hex.
    //         main: '#a796b5',
    //       },
    //     },
    //   });

    return (
        <div>
            < AppBarView />
            <div className="container">
            </div>
            <div>
                <video src={require("../assets/video/help-video.mp4")} className="img-fluid w-75 rouded mx-auto d-block" controls="controls" autoplay="true" loop muted></video>
            </div>

            <section className='bg-light py-5 my-3'>
                <div className='my-5 container '>
                    <h1 className="font-weight-bolder text-center">Steps to follow</h1>
                    <div className="row justify-content-center">

                        <div className="col-md-6">
                            <div className="d-flex align-items-center my-5 ">
                                <div className="pt-1 px-3 rounded-circle" style={{ border: "5px solid rgba(68,103,227,1)" }}>
                                    <h2 className="font-weight-bold">1</h2>
                                </div>
                                <h4 className='ml-4'>Go to the <span className="font-weight-bold">"Try demo"</span> page</h4>
                            </div>
                            <div className="d-flex align-items-center my-5">
                                <div className="pt-1 px-3 rounded-circle" style={{ border: "5px solid rgba(68,103,227,1)" }}>
                                    <h2 className="font-weight-bold">2</h2>
                                </div>
                                <h4 className='ml-4'>Upload image to detect deepfake</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="d-flex align-items-center my-5 ">
                                <div className="pt-1 px-3 rounded-circle" style={{ border: "5px solid rgba(68,103,227,1)" }}>
                                    <h2 className="font-weight-bold">3</h2>
                                </div>
                                <h4 className='ml-4'>Click <span className="font-weight-bold">"Get results"</span> button</h4>
                            </div>
                            <div className="d-flex align-items-center my-5">
                                <div className="pt-1 px-3 rounded-circle" style={{ border: "5px solid rgba(68,103,227,1)" }}>
                                    <h2 className="font-weight-bold">4</h2>
                                </div>
                                <h4 className='ml-4'>Chill and relax till it generate</h4>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


        </div>
    );
}

export default Help;