import React, { useState, useRef, useCallback, useEffect, useContext } from "react";
import { contxt } from "../mainContext";
import Webcam from "react-webcam";
const CameraApp = () => {
 
  const webcamRef = useRef();
  const [imgSrc, setImgSrc] = useState();
  const ctx = useContext(contxt);
  const [gall, setGall]=useState(ctx.photos)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    let dd=gall
    dd.push(imageSrc)
    setGall(dd)
    console.log(gall)
    ctx.setPhotos(gall)
  }, [webcamRef, setImgSrc]);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button
        className="bg-white py-1 px-3 shadow rounded-full absolute w-12 h-12 flex justify-center items-center"
        style={{ bottom: "5rem" }}
        onClick={capture}
      >
        <i className="fa fa-circle "></i>
      </button>
      {imgSrc && (
        <img src={imgSrc} className="absolute bottom-0 right-0 w-32 " />
      )}
    </div>
  );
};

export default CameraApp;
