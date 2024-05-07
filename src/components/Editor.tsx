import { useState, useEffect } from "react"; // Import useState, useEffect
import { useLocation } from "react-router-dom"; // Import useLocation for accessing route state

import Sidebar from "./Sidebar";
const Editor = () => {
  const location = useLocation();
  const [imageData, setImageData] = useState<string | undefined>();

  useEffect(() => {
    if (location.state?.imageData) {
      setImageData(location.state.imageData);
    }
  }, [location.state]);

  // ... code for image editing using the imageData (cropping, rotation) ...

  return (
    <div>
      <Sidebar />

      <div>
        {imageData && <img src={imageData} alt="Image to Edit" />}
        {/* Implement your image editing logic here */}
      </div>
    </div>
  );
};

export default Editor;
