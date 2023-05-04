import React, { useState } from "react";
import UploadService from "../services/FileUploadService";
import AppBarView from "../view/AppBarView";
import fake from '../assets/88.png';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";
import LoadingOverlay from 'react-loading-overlay'
import RingLoader from "react-spinners/RingLoader";
import { bool } from "prop-types";



const firebaseConfig = {
  apiKey: "AIzaSyD9O3iIe10jYFzGx2Hv_3tQowNElwKzSnI",
  authDomain: "fyp-deepfake-bf912.firebaseapp.com",
  projectId: "fyp-deepfake-bf912",
  storageBucket: "fyp-deepfake-bf912.appspot.com",
  messagingSenderId: "256382751728",
  appId: "1:256382751728:web:32c6c01dd6c3b1686bc335",
  measurementId: "G-5SL81RKR60",
  databaseURL: ""

};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

const Demo = () => {

  const [currentFile, setCurrentFile] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");

  const [isReal, setIsReal] = useState("");
  const [isFacedetected, setIsFacedetecetd] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [outcome, setOutcome] = useState({});

  const selectFile = (event) => {
    console.log(event)
    setCurrentFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setProgress(0);
    setMessage("");
  };

  console.log(outcome.timetaken)

  const upload = async () => {
    setIsloading(true);
    setOutcome({})
    setProgress(0);
    setMessage("")
    console.log(currentFile)
    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        console.log(response)
        setIsloading(false);
        setMessage(response.data.message);
        setOutcome(response.data)
        setIsReal(response.data.predLabel)
        setIsFacedetecetd(response.data.isfaceDtected)

      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentFile(undefined);
      });
  };

  const uploadCustom = async () => {
    setProgress(0);
    setOutcome({})
    setMessage("")
    setIsloading(true);
    await storage.ref().child("userinput/88.png").getDownloadURL().then((url) => {
      setPreviewImage(url)
      setUrl(url)
      console.log(url)
      const data = {
        "url": url,
        "name": "88.png"
      }
      UploadService.uploadConst(data, (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      })
        .then((response) => {
          setIsloading(false);
          console.log(response);
          setMessage(response.data.message);
          setOutcome(response.data);
          setIsReal(response.data.predLabel)
          setIsFacedetecetd(response.data.isfaceDtected)

        })
        .catch((err) => {
          setProgress(0);

          if (err.response && err.response.data && err.response.data.message) {
            setMessage(err.response.data.message);
          } else {
            setMessage("Could not upload the Image!");
          }

          setCurrentFile(undefined);
        });
    }).catch((error) => {
      console.log(error)
      // Handle any errors
    })


  };

  const uploadCustomReal = async () => {
    setProgress(0);
    setIsloading(true);
    setOutcome({})
    setMessage("")
    await storage.ref().child("userinput/23.png").getDownloadURL().then((url) => {
      setPreviewImage(url)
      setUrl(url)
      console.log(url)
      const data = {
        "url": url,
        "name": "23.png"
      }
      UploadService.uploadConst(data, (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      })
        .then((response) => {
          console.log(response);
          setIsloading(false);
          setMessage(response.data.message);
          setOutcome(response.data);
          setIsReal(response.data.predLabel)
          setIsFacedetecetd(response.data.isfaceDtected)

        })
        .catch((err) => {
          setProgress(0);

          if (err.response && err.response.data && err.response.data.message) {
            setMessage(err.response.data.message);
          } else {
            setMessage("Could not upload the Image!");
          }

          setCurrentFile(undefined);
        });
    }).catch((error) => {
      console.log(error)
      // Handle any errors
    })


  };

  return (
    <div>
      < AppBarView />
      <div className="container">

        <div className="row py-5">
          <div className="col-md-8">

            <h1 className="display-2  font-weight-bold mb-2"> Get started ! </h1>

            <h6 className="text-secondary mb-3"> Upload your picture and check if it is fake or real.</h6>
            <  label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={selectFile} />
            </label>
            <div className="d-flex justify-content-left">
              <button
                className="btn btn-success btn-lg mt-3 font-weight-bold mr-5"
                disabled={!currentFile}
                onClick={upload}
              >
                Get results
                <i class="fa fa-external-link ml-3" ></i>
              </button>
              {previewImage && (
                <div className="row">
                  <img className="w-25 img-fluid rounded-circle" src={previewImage} alt="" height={300} width={400} />
                </div>
              )}
              <div>
              </div>

            </div>

            {currentFile && (
              <div className="progress my-3">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progress + "%" }}
                >
                  {progress}%
                </div>
              </div>
            )}

          </div>
          <div className="col-md-4">

            <div className="d-flex justify-content-between">
              <div className="card border-0 text-center mr-3">
                <img src={require("../assets/23.png")} className="card-img-top rounded-circle img-fluid" alt="real" height={300} width={400} />
                <div className="card-body">

                  {/* <p className="card-text">Test with this Image </p> */}
                  <a onClick={uploadCustomReal} className="btn btn-primary">Test</a>
                </div>
              </div>

              <div className="card border-0 text-center">
                <img src={fake} className="card-img-top rounded-circle img-fluid" alt="fake" height={300} width={400} />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  {/* <p className="card-text">Test with this Image</p> */}
                  <a onClick={uploadCustom} className="btn btn-primary">Test</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {message && (
        <>
      {isFacedetected ?
        <div className="alert alert-success alert-dismissible mx-5 mt-3 w-75 text-center mx-auto" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="font-weight-bolder text-dark"> {message}</h5>
        </div> 
        :
        <div className="alert alert-danger alert-dismissible mx-5 mt-3 w-75 text-center mx-auto" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="font-weight-bolder text-dark"> Error: Face not detected in the provided image. Please ensure that the image contains a clear and well-lit view of a face and try again.</h5>
        </div>
        }
      </>
      )}



      

      {/* {message && (
        <div className="alert alert-success alert-dismissible mx-5 mt-3 w-75 text-center mx-auto" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 className="font-weight-bolder text-dark"> {message}</h5>
        </div>
      )} */}

      {/* display results */}
      {/* {message && ( */}

      <LoadingOverlay
            active={isLoading}
            spinner = {
              <RingLoader
              color="#36d7b7" />}
        >
    

    {isFacedetected && (
      <div className="container">

        <div className="  border-0 p-3">
          <h3 className="font-weight-bold mb-3">Generated Report</h3>

          <div className="row">
            {/* <div className="col-md-3">
            </div> */}
            <div className="col-md-12 mt-3">
              <div className="row">

                <div className="col-md-4 text-center ">
                  <div className="card shadow border-0 py-4 rounded">
                    <i class="fa fa-clock-o mb-3" style={{ fontSize: "36px" }}></i>
                    {outcome.timetaken==undefined
                    ? <h4 className="font-weight-bolder mb-0">{0+ " seconds"}</h4>
                    
                    : <h4 className="font-weight-bolder mb-0">{parseFloat(outcome.timetaken).toFixed(2) + " seconds"}</h4>
                      }

                    <small className="text-secondary font-weight-medium">Time Taken</small>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="card shadow border-0 py-4 rounded">
                    <i class="fa fa-eye mb-3" style={{ fontSize: "36px" }}></i>
                    <h4 className="font-weight-bolder mb-0">{outcome.predLabel}</h4>
                    <small className="text-secondary font-weight-medium">Prediction</small>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="card shadow border-0 py-4 rounded">
                    <i class="fa fa-thumbs-up mb-3" style={{ fontSize: "36px" }}></i>
                    {outcome.predConfidence==undefined 
                    ? <h4 className="font-weight-bolder mb-0">{0+ " %"}</h4>
                    : <h4 className="font-weight-bolder mb-0">{(outcome.predConfidence * 100).toFixed(2) + "%"}</h4>
                    }
                    <small className="text-secondary font-weight-medium">Confidence Rate</small>
                  </div>
                </div>

              </div>

              {isReal == "Fake" &&  
                      <div className="row mt-3">
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="card-body">
                              <img src={outcome.xai_grad_path} alt="icons" className="w-100" />
                              {/* <img src={require("../assets/23.png")} className='w-100' /> */}
                              <h5 className="card-title mt-3">XAI IntegratedGradient</h5>

                              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                            <div className="card p-3">
                              <h4 className="font-weight-bolder mb-0">{outcome.xai_grad_coverage}</h4>
                              <small className="text-secondary font-weight-medium">XAI IntegratedGradient coverage</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="card">
                            <div className="card-body">
                              <img src={outcome.xai_lime_path} alt="icons" className="w-100" />
                              {/* <img src={require("../assets/23.png")} className='w-100' /> */}
                              <h5 className="card-title mt-3">XAI Lime path</h5>
                              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                            <div className="card p-3">
                              <h4 className="font-weight-bolder mb-0">{outcome.coverage}</h4>
                              <small className="text-secondary font-weight-medium">XAI Lime path coverage</small>
                            </div>

                          </div>
                        </div>
                      </div>
                }

            </div>


          </div>
        </div>


      

      </div>
    )}
      </LoadingOverlay>

    </div>
  );
}

export default Demo;