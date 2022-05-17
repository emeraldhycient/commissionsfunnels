import { BsFillCartCheckFill } from "react-icons/bs";
import shoe from "../../../assets/images/shoe.jpeg";

function Product() {
  return (
    <div className=" mb-4 border-b-[.1rem] border-[#ffce1a] shadow-lg pt-2">
      <div className="bg-gray-50 h-40 w-full flex justify-center items-center">
        <img src={shoe} loading="lazy" className="h-40 w-full" alt="" />
      </div>
      <div className="w-full flex flex-col justify-between items-left px-2 ">
        <h4 className="text-base font-bold">
          italian soled black rubber hand crafted shoe
        </h4>
        <p className="text-sm text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
        </p>
        <a href="" className="my-1 md:my-4 text-sm">
          View Details
        </a>
      </div>
      <div className="w-full flex  justify-between items-left px-2 ">
        <div className="flex">
          <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
          <h4>234</h4>
        </div>
        <h3 className="text-lg font-bold">&#8358;34,000</h3>
      </div>
      <div className="w-full flex justify-between items-left mt-4 bg-gray-200 p-2">
        <h4>com: 50%</h4>
        <button className="bg-white rounded-full p-1 md:px-4 border-[.1rem] border-slate-900 text-slate-500 hover:text-blue-400 hover:border-yellow-500 flex justify-center items-center">
          copy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Product;
