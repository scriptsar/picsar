import { useState, useEffect ,useRef, RefObject} from "react"; // Import useState, useEffect
import { useLocation } from "react-router-dom"; // Import useLocation for accessing route state
import ReactCrop, { PixelCrop, type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import CropImagePreview from "./CropImagePreview";

import {useDebounceEffect} from '../hooks/useDebounceEffect'

function Editor() {
  const [crop, setCrop] = useState<Crop>();
  const cropImagePreviewCanvasRef=useRef<HTMLCanvasElement>(null);
  const [completedCrop,setCompletedCrop]=useState<PixelCrop>();
  console.log(completedCrop);









    const location = useLocation();
  const [imageData, setImageData] = useState<string | undefined>();

  useEffect(() => {
    if (location.state?.imageUrl) {
      setImageData(location.state.imageUrl);
    }
  }, [location.state]);
 



  useDebounceEffect(async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  return (
   <>
    <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={c=>setCompletedCrop(c)}>
      <img src={imageData}  width={300} height={300}/>
    </ReactCrop>

    {!!completedCrop && <CropImagePreview completedCrop={completedCrop}  previewCanvasRef={cropImagePreviewCanvasRef}/>}
   
   </>
  )
}

export default Editor