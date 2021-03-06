import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Uploadform() {
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

  const [isTurnNextPage, setisTurnNextPage] = useState(false);
  const [convertedText, setConvertedText] = useState("");

  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_quantity, setProductQuantity] = useState("");
  const [product_category, setProductCategory] = useState("");
  const [product_image, setProductImage] = useState("");
  const [product_commission, setProductCommission] = useState("");
  const [product_delivery, setProductDelivery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const token = sessionStorage.getItem("token");
    const formdata = new FormData();
    formdata.append("product_name", product_name);
    formdata.append("product_description", product_description);
    formdata.append("product_price", product_price);
    formdata.append("product_quantity", product_quantity);
    formdata.append("product_category", product_category);
    formdata.append("product_image", product_image);
    formdata.append("product_commission", product_commission);
    formdata.append("product_delivery", product_delivery);
    formdata.append("sales_copy", convertedText);
    formdata.append("product_seller", user.user_id);

    axios
      .post(`${api_url}/products/create`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          notifySuccess(res.data.message);
          setisTurnNextPage(true);
        } else {
          notifyWarn(res.data.message);
        }
      })
      .catch((err) => {
        notifyWarn(err.response.data.message);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const gotoNextPage = () => {
    setisTurnNextPage(true);
  };

  const gotoPrevPage = () => {
    setisTurnNextPage(false);
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "align",
        "strike",
        "script",
        "blockquote",
        "background",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "code-block",
        "clipboard",
      ],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "clipboard"],
      ["clean"],
    ],
  };

  return (
    <div className="shadow p-3 h-fit">
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
      <form onSubmit={(e) => handleSubmit(e)}>
        {!isTurnNextPage ? (
          <>
            <div className="w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Product Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="e.g commissionsfunnels logistics "
                value={product_name}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Product Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="e.g a product designed to solve complex mathematical problems"
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Product Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="file"
                placeholder="e.g support@commissionsfunnels.com"
                onChange={(e) => setProductImage(e.target.files[0])}
                accept="image/*"
                required
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Product Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                placeholder="e.g #400,000"
                value={product_price}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Product Category
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={product_category}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              >
                <option>Select Product Category</option>
                <option>Beauty</option>
                <option>Fashion</option>
              </select>
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Product Quantity
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                placeholder="e.g 500"
                value={product_quantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                required
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Commission
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                placeholder="e.g 30%"
                value={product_commission}
                onChange={(e) => setProductCommission(e.target.value)}
                required
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Delivery Locations
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={product_delivery}
                onChange={(e) => setProductDelivery(e.target.value)}
                required
              >
                <option>Select Delivery Location</option>
                <option>Nationwide</option>
                <option>locally</option>
              </select>
            </div>
            <button
              onClick={(e) => gotoNextPage()}
              className="w-fit flex bg-slate-900 text-white px-5 py-2 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500"
            >
              <span className=" text-sm">Next</span>
            </button>
          </>
        ) : (
          <>
            <div className="w-full px-3 mb-6 h-[100vh]">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-between items-center">
                <a
                  target="_blank"
                  href="https://blog.hubspot.com/sales/sales-copy#:~:text=What%20is%20sales%20copy%3F,business%20achieve%20its%20sales%20goals."
                  className="flex items-center"
                >
                  Design Your Sales copy
                  <AiOutlineQuestionCircle
                    size={20}
                    className="text-[#ffce1a]"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://blog.hubspot.com/marketing/copywriting-examples"
                  className="text-blue-300 border-b border-[#ffce1a] text-right"
                >
                  sales copy examples
                </a>
              </label>
              <ReactQuill
                theme="snow"
                value={convertedText}
                onChange={setConvertedText}
                placeholder="create and design your product salescopy, we would be eager to see what u create ☺️"
                modules={modules}
                style={{ height: "66vh" }}
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={(e) => gotoPrevPage()}
                className="w-fit flex bg-yellow-900 text-white px-5 py-2 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500"
              >
                <span className=" text-sm">Prev</span>
              </button>
              <button
                type="submit"
                className="w-fit flex bg-slate-900 text-white px-5 py-2 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500"
              >
                <span className=" text-sm">Submit</span>
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Uploadform;
