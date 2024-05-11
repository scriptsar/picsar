import re from "./assets/re.png";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectImageCard from "./components/SelectImageCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
function App() {
  return (
   <div className= "border-4 border-green-600 flex-col h-screen">


<BrowserRouter>
        <Navbar/>
      <Routes>
    
        <Route path="/" element={<SelectImageCard />} />
        <Route path="/image-editor" element={<Editor />} />
      </Routes>
  
    </BrowserRouter>
   </div>
  );
}
export default App;
