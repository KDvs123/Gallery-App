import {  signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  const handleLogOut = async () => {
    try {

      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="navbar bg-base-100 justify-between">
      <a className="font-bold  normal-case text-xl underline">Gallery</a>
      <a
        href="#_"
        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
        onClick={handleLogOut}
      >
        <span className="absolute bottom-0 right-0 w-6 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="absolute top-0 left-0 w-15 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="relative z-20 flex items-center text-sm"></span>
        <RiLogoutCircleLine size={20} className="mr-5" />
        LogOut
      </a>
      {/* <button onClick={handleLogOut}>LogOut</button> */}
    </div>
  );
};
export default Navbar;
