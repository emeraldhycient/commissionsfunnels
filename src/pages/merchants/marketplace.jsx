import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/merchants/layout";
import Product from "../../components/merchants/marketplace/product";
import Stat from "../../components/merchants/vendor/stat";
import { RiStore3Line } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Marketplace() {
  const api_url = import.meta.env.VITE_API_URL;

  const user = JSON.parse(sessionStorage.getItem("user"));
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    axios
      .get(`${api_url}/products`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        //console.log(err)

        notifyWarn(err.response.data.message);
        notifyWarn(err.response.message);
      });
  }, []);

  return (
    <Layout>
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
      <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
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
          <h6>Marketplace</h6>
        </Link>
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 mt-4">
        <Stat
          name="Total  Products"
          total={products.length}
          icon={<RiStore3Line size={25} className="text-[#ffce1a] mr-2" />}
        />
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        <input
          className="col-span-3 bg-gray-100 appearance-none border-[.01rem] border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
          type="text"
          placeholder="Search"
        />
        <div className="w-full flex justify-between md:ml-2 h-10  mt-2 md:mt-0">
          <select className="w-full border-[.01rem] border-gray-300 focus:outline-none focus:bg-white focus:border-yellow-500">
            <option>Product Status</option>
            <option>All</option>
            <option>Old</option>
            <option>New</option>
          </select>
          <button className="ml-4 border border-slate-900 px-2  bg-slate-900 text-white">
            search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-6 mt-4">
        {products.length > 0 ? (
          products.map((product) => <Product key={product.id} data={product} />)
        ) : (
          <div>
            <h1>There are no approved products at the moment</h1>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Marketplace;
