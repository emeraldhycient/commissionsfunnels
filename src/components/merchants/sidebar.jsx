import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sidebar() {
  let navigate = useNavigate();

  const api_url = import.meta.env.VITE_API_URL;
  const user = JSON.parse(sessionStorage.getItem("user"));

  const notifySuccess = (msg) =>
    toast.success(`🦄  ${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyWarn = (msg) =>
    toast.warn(` ${msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const logout = () => {
    axios
      .get(`${api_url}/logout`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("user");
          notifySuccess(res.data.message);
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 3000);
        } else {
          notifyWarn(res.data.message);
        }
      })
      .catch((err) => {
        notifyWarn(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <ul className="mx-5 md:mx-auto flex md:block justify-between items-center">
        <li className="text-gray-300 text-sm my-4 hover:text-yellow-500">
          <Link to="/merchant/dashboard" className="flex items-center ">
            <svg
              className="h-5 w-5 mr-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h6 className="hidden md:block">Dashboard</h6>
          </Link>
        </li>
        <li className="text-gray-300 text-sm my-4 hover:text-yellow-500">
          <Link to="/merchant/vendor" className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <h6 className="hidden md:block">Vendor</h6>
          </Link>
        </li>
        <li className="text-gray-300 text-sm my-4 hover:text-yellow-500">
          <Link to="/merchant/sales" className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
            <h6 className="hidden md:block">Sales</h6>
          </Link>
        </li>
        <li className="text-gray-300 text-sm my-4 hover:text-yellow-500">
          <Link to="/merchant/Marketplace" className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <h6 className="hidden md:block">Marketplace</h6>
          </Link>
        </li>
        <li className="text-gray-300 text-sm my-4 hover:text-yellow-500">
          <Link to="/merchant/transactions" className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            <h6 className="hidden md:block">Transactions</h6>
          </Link>
        </li>
        <li className="text-gray-300 text-sm my-4 hover:text-yellow-500">
          <Link to="/merchant/dispatcherszone" className="flex items-center ">
            <svg
              className="h-5 w-5 mr-3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h6 className="hidden md:block">Dispatchers</h6>
          </Link>
        </li>
        <li
          className="block md:hidden text-gray-300 text-sm my-4 hover:text-yellow-500"
          onClick={(e) => logout()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </li>
      </ul>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="hidden md:block bg-yellow-500 h-24 flex flex-col pb-1 justify-between items-center">
        <Link to="/" className="flex justify-between items-center pt-2  ">
          <div className="h-10 w-10 p-2  rounded-full bg-slate-900">
            {/* replace man with person usernmae*/}
            <img
              src="https://avatars.dicebear.com/api/human/man.svg"
              alt="avatar"
              className="h-full w-full rounded-full"
            />
          </div>
          <h2 className="mx-2 text-sm">{user.fullname}</h2>
        </Link>
        <button
          onClick={(e) => logout()}
          className="w-[99%] bg-slate-900 text-white p-2 mx-auto flex items-center justify-center items-center"
        >
          logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
