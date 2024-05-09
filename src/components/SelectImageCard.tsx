
import { useRef, useState } from "react"
import {useNavigate } from "react-router-dom"
import { ChangeEvent } from "react";
const SelectImageCard = () => {
  const [imagePreview,setImagePreview]=useState('');
  const [progress,setProgress]=useState(0);
  const navigate=useNavigate();
  const fileInputRef=useRef<HTMLInputElement>(null)


const handleImageChange=(e:ChangeEvent<HTMLInputElement>)=>{
  const file = e.target.files?.[0] as Blob;
  if (file) {
    const reader=new FileReader();


    reader.onload=(e:ProgressEvent<FileReader>)=>{
      if (e.target && e.target.result) {
        const imageUrl=e.target.result as string;
        console.log('the image url is :',imageUrl)
        setImagePreview(imageUrl)
        setTimeout(() => {
          setProgress(100);
          navigate("/image-editor",{state:{imageUrl}});
        }, 2000); 
        
      }
      else{
        console.error('Error reading image file');
      }


    }


    reader.readAsDataURL(file);
    
  }

  else{
    console.warn('No image file selected');
  }




}
  return (
    <div >
        <div>
            <input style={{display:'none'}} type="file" onChange={handleImageChange} ref={fileInputRef}/>
        
            <button onClick={() => fileInputRef.current && fileInputRef.current.click()}>select image</button>
            {progress>0 && <progress value={progress} max='100' />}
            {imagePreview && <img src={imagePreview} alt="image-preview" width={200} height={200} />}
        </div>


        <div>or drag and drop image here</div>
    </div>
  )
}

export default SelectImageCard