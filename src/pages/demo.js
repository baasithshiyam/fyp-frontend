import React, { useState, useEffect } from "react";
import UploadService from "../services/FileUploadService";
import AppBarView from "../view/AppBarView";

const Demo = () => {

    const [currentFile, setCurrentFile] = useState(undefined);
    const [previewImage, setPreviewImage] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    
    const [outcome, setOutcome] = useState({});

const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
    setProgress(0);
    setMessage("");
  };


const upload = async () => {
setProgress(0);

UploadService.upload(currentFile, (event) => {
    setProgress(Math.round((100 * event.loaded) / event.total));
    })
        .then((response) => {
        
        setMessage(response.data.message);
        setOutcome(response.data)
        
        
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
    
    return (
        <div>
        < AppBarView />
        <h1 className="display-4 text-center"> Test on your Images </h1>
    

        <div className="d-flex justify-content-around">
            <div className="card">
            <img src={require("../assets/1863.png")} className="card-img-top" alt="real" height={300}  width={400} />
            <div className="card-body">
                
                <p className="card-text">Test with this Image </p>
                <a href="#" className="btn btn-primary">Test</a>
            </div>
            </div>

            <div className="card">
            <img src={require("../assets/2952.png")} className="card-img-top" alt="real" height={300}  width={400} />
            <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">Test with this Image</p>
                <a href="/" className="btn btn-primary">Test</a>
            </div>
            </div>
        </div>

        <div className="mt-5 container text-center">
            <p>Upload Image</p>
        </div>
        <div className="row align-self-center ml-5">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={selectFile} />
            </label>
          </div>
  
          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!currentFile}
              onClick={upload}
            >
              Upload
            </button>
          </div>
        </div>
  
        {currentFile && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info"
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
  
        {previewImage && (
          <div className="row">
            <img className="preview col align-self-center " src={previewImage} alt="" height={300}  width={400}/>
          </div>
        )}
  
        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}
  
          {/* display results */}
       {message && (
          // <div className="alert alert-secondary mt-3" role="alert">
          //   {parseFloat(outcome.timetaken).toFixed(2)+ " seconds"}
          // </div>

          <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Time Taken</h5>
                      <p className="card-text">{parseFloat(outcome.timetaken).toFixed(2)+ " seconds"}</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Prediction</h5>
                      <p className="card-text">{outcome.predLabel}</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Confidence Rate</h5>
                      <p className="card-text">{(outcome.predConfidence* 100).toFixed(2) + "%"}</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )}



      </div>
    );
}

export default Demo;