import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
          <div
            className="bg-white text-gray-400  w-full md:w-8/12 mx-2 md:mx-auto pt-6"
            dangerouslySetInnerHTML={{ __html: product.sales_copy }}
          ></div>
        </>
      )}
      <Footer />
    </Layout>
  );
}

export default Salescopy;
