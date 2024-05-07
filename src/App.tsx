import re from "./assets/re.png";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectImageCard from "./components/SelectImageCard";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import Editor from "./components/Editor";

function Appi() {
  // const navigate = useNavigate();
  const [file, setFile] = useState<string | undefined>();
  const uploadRef = useRef<HTMLInputElement>(null);
  const progressRef = useRef<HTMLProgressElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    // setFile(URL.createObjectURL(selectedFile));
    const handleImageLoad = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // ... code to draw the image on the canvas, similar to previous example ...

      const dataURL = canvas.toDataURL("image/jpeg");
      console.log('the data url',dataURL)
      setFile(dataURL);
      // navigate("/image-editor"); // Navigate with image data
    };

    const img = new Image();
    img.onload = handleImageLoad;
    img.src = URL.createObjectURL(selectedFile);

    const simulateUpload = () => {
      let progress = 0;
      const intervalId = setInterval(() => {
        progress += 5;
        if (progressRef.current) {
          progressRef.current.value = progress;
        }
        if (progress === 100) {
          clearInterval(intervalId);
        }
      }, 100);
    };

    simulateUpload();
  };

  useEffect(() => {
    return () => progressRef.current?.setAttribute("value", "0");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectImageCard />} />
          <Route path="/image-editor" element={<Editor />} />
        </Routes>

        <div>
          <h1>Image Manipulation</h1>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>

          <a href="https://react.dev" target="_blank">
            <img src={re} className="logo react" alt="React logo" />
          </a>

          <input ref={uploadRef} type="file" onChange={handleFileChange} />

          {file && (
            <img
              src={file}
              alt="Selected File"
              style={{ width: "300px", height: "100px" }}
            />
          )}
          <progress ref={progressRef} max={100} value={0} />

          <Link to="/image-editor" state={{ imageData: file }}>
            {" "}
            {/* Or use navigate directly */}
            Edit Image
          </Link>
        </div>
      </BrowserRouter>
    </>
  );
}
function App(){
  const [file, setFile] = useState<string | undefined>();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);
 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (!selectedFile) return; // Handle potential lack of selected file

    const handleImageLoad = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // ... code to draw the image on the canvas, similar to previous example ...

      const dataURL = canvas.toDataURL('image/jpeg');
      setFile(dataURL);
      navigate('/image-editor', { state: { imageData: dataURL } }); // Navigate with image data
    };

    const img = new Image();
    img.onload = handleImageLoad;
    img.src = URL.createObjectURL(selectedFile);
  };

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SelectImageCard />} />
          <Route path="/image-editor" element={<Editor />} />
    </Routes>
    <div>
      <input ref={uploadRef} type="file" onChange={handleFileChange} />
      {file && <img src={file} alt="Selected File" />}
      <Link to="/image-editor" state={{ imageData: file }}> {/* Or use navigate directly */}
        Edit Image
      </Link>
    </div>
    </BrowserRouter>
  );
}
export default App;
