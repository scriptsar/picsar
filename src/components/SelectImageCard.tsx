
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
    <div className=" align-middle bg-cyan-600 ml-10 mt-4 mb-4 border-2 border-cyan-800 border-dashed flex items-center justify-center w-96 ">
        <div className="p-4 flex-col">
          
            <input style={{display:'none'}} type="file" onChange={handleImageChange} ref={fileInputRef}/>
        
            <button className="rounded-none text-sm text-cyan-50 p-4 bg-green-900" onClick={() => fileInputRef.current && fileInputRef.current.click()}>select image</button>
            {progress>0 && <progress value={progress} max='100' />}




            {imagePreview && <img src={imagePreview} alt="image-preview" width={200} height={200} />}
        </div>


        <div className="text-grey-400 font-thin">or drag and drop image here</div>
    </div>
  )
}

export default SelectImageCard