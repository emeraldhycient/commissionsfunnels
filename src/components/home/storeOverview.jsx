import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./product";

function StoreOverview() {
  const api_url = import.meta.env.VITE_API_URL;

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
        const sliceProducts = res.data.slice(0, 6);
        setProducts(sliceProducts);
      })
      .catch((err) => {
        //console.log(err)

        notifyWarn(err.response.data.message);
        notifyWarn(err.response.message);
      });
  }, []);

  return (
    <section className="w-full h-fit pb-8">
      <div className="md:w-10/12 md:mx-auto mx-2  mt-10">
        <h2 className="text-center uppercase text-3xl font-bold">
          some Products listed on our platform
        </h2>
      </div>
      <div className="md:w-10/12 md:mx-auto mx-4  mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-6 mt-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Product key={product.id} data={product} />
            ))
          ) : (
            <div>
              <h1>There are no approved products at the moment</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default StoreOverview;
