import { RefObject } from "react";
import { PixelCrop } from "react-image-crop";
interface CropImagePreviewProps{
    previewCanvasRef:RefObject<HTMLCanvasElement>;
    completedCrop:PixelCrop,
  }
  
const CropImagePreview = ({completedCrop, previewCanvasRef}:CropImagePreviewProps) => {
  return (
    <>
      <div>
        <canvas
          ref={previewCanvasRef}
          style={{
            border: "1px solid black",
            objectFit: "contain",
            width: completedCrop.width,
            height: completedCrop.height,
          }}
        />
      </div>
    </>
  );
};

export default CropImagePreview;
