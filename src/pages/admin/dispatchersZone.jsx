import { useState } from "react";
import { Link } from "react-router-dom";
import Profilecard from "../../components/merchants/dispatchers/profilecard";
import Layout from "../../components/merchants/layout";

function DispatchersZone() {
  const [dispatchers, setdispatchers] = useState([
    {
      id: 1,
      name: "kelvin mane",
      location: "Lagos Nigeria",
      delivery: "Nationwide",
      price: "600",
    },
    {
      id: 2,
      name: "emerald hycient",
      location: "Lagos Nigeria",
      delivery: "state",
      price: "500",
    },
    {
      id: 3,
      name: "John Doe",
      location: "Lagos Nigeria",
      delivery: "Nationwide",
      price: "700",
    },
    {
      id: 4,
      name: "Jane Doe",
      location: "Lagos Nigeria",
      delivery: "state",
      price: "550",
    },
    {
      id: 5,
      name: "edan Doe",
      location: "Lagos Nigeria",
      delivery: "Nationwide",
      price: "500",
    },
    {
      id: 6,
      name: "chuks pamer",
      location: "Lagos Nigeria",
      delivery: "state",
      price: "400",
    },
  ]);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
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
            <h6>Dispatcherszone</h6>
          </Link>
        </h5>
        <Link to="/onboarding/dispatcher" className="ml-4">
          <button className="w-fit flex bg-slate-900 text-white px-2 py-1 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="ml-2 text-sm">Become Dispatcher</span>
          </button>
        </Link>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        <input
          className="col-span-3 bg-gray-100 appearance-none border-[.01rem] border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
          type="text"
          placeholder="Search"
        />
        <div className="w-full flex justify-between md:ml-2 h-10  mt-2 md:mt-0">
          <select className="w-full border-[.01rem] border-gray-300 focus:outline-none focus:bg-white focus:border-yellow-500">
            <option>Delivery Locations</option>
            <option>Nation wide</option>
            <option>same state</option>
          </select>
          <button className="ml-4 border border-slate-900 px-2  bg-slate-900 text-white">
            search
          </button>
        </div>
      </div>
      <div className="md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2  gap-2 md:gap-6 mt-4 mb-4">
        {dispatchers.length > 0 ? (
          dispatchers.map((dispatcher) => (
            <Profilecard dispatcher={dispatcher} key={dispatcher.id} />
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-slate-900 text-3xl">No dispatchers</h1>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default DispatchersZone;
