import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import Layout from "./layout";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Salescopy() {
  const { id } = useParams();
  const api_url = import.meta.env.VITE_API_URL;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const user = JSON.parse(sessionStorage.getItem("user"));

  const config = {
    public_key: "FLWPUBK_TEST-ed08fcc09d22e13c173bbebca18da272-X",
    tx_ref: `commissionsfunnels-${Date.now()}`,
    amount: product.product_price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      phonenumber: user.phone,
      name: user.fullname,
    },
    customizations: {
      title: product.product_name,
      description: product.product_description,
      logo: "https://i.postimg.cc/76rWrcZV/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

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
            <div className="bg-slate-900 mb-4 h-[200px] flex flex-col justify-center items-center">
              <button
                className="bg-yellow-500 px-5 py-2 text-white"
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Buy now for #{product.product_price}
              </button>
              <p className="text-sm text-gray-300 py-2 px-4 mt-4">
                <span className="text-yellow-500">Disclaimer :</span> please
                note that this product and everything associated with is a
                product of its ownwer and their organisation,we are only and
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
