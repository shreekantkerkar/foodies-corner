import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import app_logo from "../utils/app-logo.jpg";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  //Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" shadow-lg text-xl font-[Poppins]  bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        
          <Link to="/"><img className="w-28 m-2 cursor-pointer" src={app_logo} alt="Logo"/></Link>
          


        {/* <p className="logo-side">Pune , Maharashtra , India</p> */}

        <ul className="flex p-4 m-4 gap-[3vw] items-center">
          <li className="px-4 font-extrabold cursor-pointer hover:text-gray-500">
            Online Status :{onlineStatus ? " ✅" : " ❌"}
          </li>
          <li className="px-4 font-extrabold hover:text-gray-500">
            <Link to="/"> Home</Link>
          </li>

          <li className="px-4  font-extrabold hover:text-gray-500">
            <Link to="/about">About us</Link>
          </li>

          <li className="px-4 font-extrabold hover:text-gray-500">
            <Link to="/cart">Cart ({cartItems.length} Items)</Link>
          </li>
          {/* <li className="px-4 font-bold hover:text-gray-500">
              <Link to="/grocery">Grocery</Link>
            </li> */}
          {/* <li className="px-4 hover:bg-green-50">
            <Link to="/contact">Contact us</Link>
          </li> */}

          {/* <li> {loggedInUser} </li> */}
        </ul>
        <button
          className="px-5 py-2 font-bold bg-green-200 rounded-full hover:bg-green-100"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </nav>
    </div>
  );
};

export default Header;
