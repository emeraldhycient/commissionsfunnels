import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Layout from "./layout";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CheckoutForm from "./checkoutForm";

function Salescopy() {
  const { id } = useParams();
  const api_url = import.meta.env.VITE_API_URL;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [isCheckoutShowing, setisCheckoutShowing] = useState(false);

  useEffect(() => {
    axios
      .get(`${api_url}/products/${id}`)
      .then((res) => {
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-yellow-500" role="status">
            <span className="sr-only text-yellow-500">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="text-center">
          <h1 className="text-yellow-500">{error}</h1>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="bg-white text-gray-400  w-full md:w-8/12 mx-2 md:mx-auto pt-6">
            <div
              className="bg-white text-gray-400"
              dangerouslySetInnerHTML={{ __html: product.sales_copy }}
            ></div>
            <div className="bg-white border shadow p-2 mt-6">
              {isCheckoutShowing && (
                <CheckoutForm
                  product={product}
                  setisCheckoutShowing={setisCheckoutShowing}
                />
              )}
            </div>
            <div className="bg-slate-900 mb-4 h-[200px] flex flex-col justify-center items-center">
              {!isCheckoutShowing && (
                <button
                  className="bg-yellow-500 px-5 py-2 text-white rounded-md"
                  onClick={() => {
                    setisCheckoutShowing(true);
                  }}
                >
                  Buy now for #{product.product_price.toLocaleString()}.00
                </button>
              )}
              <p className="text-sm text-gray-300 py-2 px-4 mt-4">
                <span className="text-yellow-500">Disclaimer :</span> please
                note that this product and everything associated with it, is a
                product of its owner and their organisations,we are only an
                intermediary to accept payment on behalf of the vendor.
              </p>
            </div>
          </div>
          <Footer />
        </>
      )}
    </Layout>
  );
}

export default Salescopy;
