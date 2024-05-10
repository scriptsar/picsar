import { useState, useEffect ,useRef, RefObject} from "react"; // Import useState, useEffect
import { useLocation } from "react-router-dom"; // Import useLocation for accessing route state
import ReactCrop, { PixelCrop, type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import CropImagePreview from "./CropImagePreview";
import {cropImageCanvasPreview} from './cropImageCanvasPreview'
import {useDebounceEffect} from '../hooks/useDebounceEffect'

function Editor() {
  const [crop, setCrop] = useState<Crop>();
  const cropImagePreviewCanvasRef=useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);


  const [completedCrop,setCompletedCrop]=useState<PixelCrop>();
  const location = useLocation();
  const [imageData, setImageData] = useState<string | undefined>();
  const blobUrlRef = useRef('')
  useEffect(() => {
    if (location.state?.imageUrl) {
      setImageData(location.state.imageUrl);
    }
  }, [location.state]);
 



  useDebounceEffect(async () => {
      if (completedCrop?.width &&completedCrop?.height && imgRef.current && cropImagePreviewCanvasRef.current) {

        // We use canvasPreview as it's much faster than imgPreview.
        cropImageCanvasPreview(imgRef.current,cropImagePreviewCanvasRef.current,completedCrop,)}},100,[completedCrop],)






        async function onDownloadCropClick() {
          const image = imgRef.current
          const previewCanvas = cropImagePreviewCanvasRef.current
          if (!image || !previewCanvas || !completedCrop) {
            throw new Error('Crop canvas does not exist')
          }
      
          // This will size relative to the uploaded image
          // size. If you want to size according to what they
          // are looking at on screen, remove scaleX + scaleY
          const scaleX = image.naturalWidth / image.width
          const scaleY = image.naturalHeight / image.height
      
          const offscreen = new OffscreenCanvas(
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
          )
          const ctx = offscreen.getContext('2d')
          if (!ctx) {
            throw new Error('No 2d context')
          }
      
          ctx.drawImage(
            previewCanvas,
            0,
            0,
            previewCanvas.width,
            previewCanvas.height,
            0,
            0,
            offscreen.width,
            offscreen.height,
          )
          // You might want { type: "image/jpeg", quality: <0 to 1> } to
          // reduce image size
          const blob = await offscreen.convertToBlob({
            type: 'image/png',
          })
      
          if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current)
          }
          blobUrlRef.current = URL.createObjectURL(blob)
      
          if (hiddenAnchorRef.current) {
            hiddenAnchorRef.current.href = blobUrlRef.current
            hiddenAnchorRef.current.click()
          }
        }





  return (
   <>
    <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={c=>setCompletedCrop(c)}>
      <img src={imageData}
      ref={imgRef} 
      
      
      width={300} height={300}
      
      />
    </ReactCrop>

    {!!completedCrop && <CropImagePreview completedCrop={completedCrop}  previewCanvasRef={cropImagePreviewCanvasRef}/>}

    <button onClick={onDownloadCropClick}>Download Crop</button>
   
   </>
  )
}

export default Editor