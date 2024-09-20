import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();  
  const navigation = useNavigate()
 const handleLogout =()=>{
  localStorage.removeItem("token")
  navigation('/')
 }

  return (
    <div className="flex justify-between p-3 bg-[#435059]">
      <div>
        <h2 className="p-2 text-2xl font-bold text-[#f2f2f2]">Logo</h2>
      </div>
      {localStorage.getItem("token") ? (
        <nav className="flex">
          <ul className="flex items-center pt-5 text-white font-bold">
            <li
              className={`mx-4 ${
                location.pathname === "/home" ? "text-[#2bd9c1]" : ""
              } `}
            >
              <Link to="/home">Home</Link>
            </li>
            <li
              className={`mx-4 ${
                location.pathname === "/create-user" ? "text-[#2bd9c1]" : ""
              } `}
            >
              <Link to="/create-user">Create User</Link>
            </li>             
          </ul>
          <div className="pt-4">
            <button className="btn bg-blue-500 p-2 rounded-md text-sm text-white" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      ) : (
        <div className="pt-2">
          <button className="btn bg-green-500 p-2 mx-2 rounded-md text-sm text-white">
            <Link to="/">Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
