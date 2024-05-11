// import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="w-full border-2 border-blue-600 flex p-4 justify-stretch bg-slate-800 ">
      

      <a href="/" className="text-sm border-2 font-thick white border-fuchsia-400">picsar</a>

      <ul className=" flex justify-stretch border-2 border-fuchsia-400 m-2 p-2 w-full">
        <li className="pr-4">crop</li>
        <li  className="pr-4">compress</li>

        <li className="">resize</li>
      </ul>


      <MdDarkMode className="border-2 border-fuchsia-400 w-10 h-10 mr-2 text-white-200" />

      <CiGlobe className="border-2 border-fuchsia-400 w-10 h-10 text-white-400" />
    </div>
  );
};

export default Navbar;
