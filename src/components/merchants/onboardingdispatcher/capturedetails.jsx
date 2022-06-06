import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Capturedetails() {
  const api_url = import.meta.env.VITE_API_URL;

  const user = JSON.parse(sessionStorage.getItem("user"));

  const [company_name, setcompany_name] = useState("");
  const [company_address, setcompany_address] = useState("");
  const [company_phone, setcompany_phone] = useState("");
  const [company_email, setcompany_email] = useState("");
  const [company_website, setcompany_website] = useState("");
  const [company_images, setcompany_images] = useState([]);
  const [company_representative, setcompany_representative] = useState("");
  const [company_representative_phone, setcompany_representative_phone] =
    useState("");
  const [delivery_fee, setdelivery_fee] = useState("");
  const [company_location, setcompany_location] = useState("");
  const [company_delivery_zone, setcompany_delivery_zone] = useState("");

  const handleMultipleimages = (e) => {
    const selectedFIles = [];
    const targetFiles = e.target.files;

    for (let i = 0; i < targetFiles.length; i++) {
      selectedFIles.push(targetFiles[i]);
    }
    setcompany_images(selectedFIles);
  };

  const ShowPreview = ({ image }) => {
    if (image) {
      return (
        <img
          src={URL.createObjectURL(image)}
          height={50}
          width={60}
          className="w-[100px] h-28 hover:scale-150"
          alt="preview"
        />
      );
    }
  };

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

  return (
    <div className="shadow p-3">
      <form onSubmit={handleSubmit}>
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Company Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g commissionsfunnels logistics "
            value={company_name}
            onChange={(e) => setcompany_name(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Office Address
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g 4 commissionsfunnels way , anambra state"
            value={company_address}
            onChange={(e) => setcompany_address(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Company Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g 08033456789"
            value={company_phone}
            onChange={(e) => setcompany_phone(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Company Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            placeholder="e.g support@commissionsfunnels.com"
            value={company_email}
            onChange={(e) => setcompany_email(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Company Website
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="url"
            placeholder="e.g commissionsfunnels.com"
            value={company_website}
            onChange={(e) => setcompany_website(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Company Images
          </label>
          {company_images.length > 1 ? (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 my-2">
              {company_images.map((image, index) => (
                <div key={index}>
                  <ShowPreview image={image} />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="file"
            placeholder="e.g support@commissionsfunnels.com"
            onChange={handleMultipleimages}
            multiple
            accept="image/*"
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Company location
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g lagos"
            value={company_location}
            onChange={(e) => setcompany_location(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name of Representative
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g John Doe"
            value={company_representative_phone}
            onChange={(e) => setcompany_representative_phone(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Representative Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g 08033456789"
            value={company_representative}
            onChange={(e) => setcompany_representative(e.target.value)}
            required
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Delivery fee/kg
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="e.g 500"
            value={delivery_fee}
            onChange={(e) => setdelivery_fee(e.target.value)}
            required
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Delivery Locations
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={company_delivery_zone}
            onChange={(e) => setcompany_delivery_zone(e.target.value)}
            required
          >
            <option>Select Delivery Location</option>
            <option>Nationwide</option>
            <option>locally</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-fit flex bg-slate-900 text-white px-5 py-2 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500"
        >
          <span className=" text-sm">Submit</span>
        </button>
      </form>
    </div>
  );
}

export default Capturedetails;
