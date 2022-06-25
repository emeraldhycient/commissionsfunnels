import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function CheckoutForm({ product, setisCheckoutShowing }) {
  const api_url = import.meta.env.VITE_API_URL;

  const user = JSON.parse(sessionStorage.getItem("user"));

  const [receiversname, setreceiversname] = useState("");
  const [receiversaddress, setreceiversaddress] = useState("");
  const [receiversphone, setreceiversphone] = useState("");
  const [receiverstate, setreceiverstate] = useState("");
  const [quantity, setquantity] = useState(1);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("company_name", company_name);
    formData.append("company_address", company_address);
    formData.append("company_phone", company_phone);
    formData.append("company_email", company_email);
    formData.append("company_website", company_website);
    formData.append("company_images[]", company_images);
    formData.append("company_representative", company_representative);
    formData.append(
      "company_representative_phone",
      company_representative_phone
    );
    formData.append("delivery_fee", delivery_fee);
    formData.append("company_location", company_location);
    formData.append("company_delivery_zone", company_delivery_zone);
    formData.append("user_id", user.user_id);

    axios
      .post(`${api_url}/dispatchers/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        notifySuccess(res.data.message);
        setTimeout(() => {
          window.location.href = "/merchant/dashboard";
        }, 2000);
      })
      .catch((err) => {
        //console.log(err)
        notifyWarn(err.response.data.message);
      });
  };

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
    <div className="shadow p-3">
      <ToastContainer />
      <button onClick={(e) => setisCheckoutShowing(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mb-4 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form onSubmit={handleSubmit}>
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Receivers Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g commissionsfunnels logistics "
            value={receiversname}
            onChange={(e) => setreceiversname(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Receivers Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g 4 commissionsfunnels way , anambra state"
            value={receiversaddress}
            onChange={(e) => setreceiversaddress(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Receivers Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g 08033456789"
            value={receiversphone}
            onChange={(e) => setreceiversphone(e.target.value)}
            required
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Orders Quantity
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g 1"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
            required
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            State
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={receiverstate}
            onChange={(e) => setreceiverstate(e.target.value)}
            required
          >
            <option>Select Delivery Location</option>
            <option>Nationwide</option>
            <option>locally</option>
          </select>
        </div>
        <center>
          <button
            className="bg-yellow-500 px-5 py-2 text-white rounded-md align-center"
            onClick={() => {
              setisCheckoutShowing(true);
              /*handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });*/
            }}
          >
            Buy now for #{product.product_price.toLocaleString()}.00
          </button>
        </center>
      </form>
    </div>
  );
}

export default CheckoutForm;
