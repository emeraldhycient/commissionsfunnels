import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Index() {
  let navigate = useNavigate();

  const api_url = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    axios
      .post(`${api_url}/login`, {
        email,
        password,
      })
      .then((res) => {
        //console.log(res);
        if (res.data.status === "success") {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          notifySuccess(res.data.message);
          setTimeout(() => {
            navigate("/merchant/dashboard", { replace: true });
          }, 3000);
        } else {
          notifyWarn(res.data.message);
        }
      })
      .catch((err) => {
        notifyWarn(err.response.data.message);
        //console.log(err);
      });
  };

  return (
    <section>
      <h1 className="text-2xl font-extrabold">Welcome Back</h1>
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
      <p className="text-slate-500">Welcome back, please enter your details</p>
      <form className="w-full max-w-sm mt-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-email"
          >
            Email
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-email"
            type="email"
            placeholder="JaneDoe@commissionsfunnels.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            placeholder="********8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <a
            className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            href="#"
          >
            Forgot Password?
          </a>
          <a
            className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            href="/sign-up"
          >
            create account
          </a>
        </div>
        <button
          className="bg-slate-900 hover:bg-[#ffce1a] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}

export default Index;
