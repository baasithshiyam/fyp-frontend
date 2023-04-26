import http from '../http-common'


const upload = (file, onUploadProgress) => {
    let formData = new FormData();
  
    formData.append("file", file);
    console.log(formData)
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      onUploadProgress,
    });
  };
  
const uploadConst = (file, onUploadProgress) => {
 
  return http.post("/uploadstatic", file, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
    onUploadProgress,
  });
};

//   const getFiles = () => {
//     return http.get("/files");
//   };
  
  export default {
    upload,
    uploadConst,
    // getFiles,
  };