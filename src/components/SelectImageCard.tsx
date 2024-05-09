
import { useRef, useState } from "react"
import { BrowserRouter,Routes,Route,Link,useNavigate } from "react-router-dom"
import { ChangeEvent } from "react";
const SelectImageCard = () => {
  const [imagePreview,setImagePreview]=useState('');
  const [progress,setProgress]=useState(0);
  const navigate=useNavigate();
  const fileInputRef=useRef<HTMLInputElement>(null)
// IMAGE HANDLER

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
          navigate("/image-editor");
        }, 2000); // Simulate progress completion after 2 seconds
        
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
    <div style={{border:'6px dotted red',padding:'14px'}}>
        <div>
            <input type="file" onChange={handleImageChange} ref={fileInputRef}/>
        
            <button onClick={() => fileInputRef.current && fileInputRef.current.click()}>select image</button>
            {progress>0 && <progress value={progress} max='100' />}
            {imagePreview && <img src='' alt="image-preview" style={{ width:'300',height:'300' }} />}
        </div>


        <div>or drag and drop image here</div>
    </div>
  )
}

export default SelectImageCard