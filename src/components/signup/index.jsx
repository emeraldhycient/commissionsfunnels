import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Index() {
  let navigate = useNavigate();

  const api_url = "http://127.0.0.1:8000";

  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  //check if password and comfirm password match and also check if its more than 6 characters
  useEffect(() => {
    if (password.length < 6) {
      setError("password must be more than 6 characters");
    } else {
      setError("");
    }

    if (password != "" && confirmPassword != "") {
      {
        if (password !== confirmPassword) {
          setError("Password and Confirm Password do not match");
        } else {
          setError("");
        }
      }
    }
  }, [password, confirmPassword]);

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

    if (error == "") {
      axios
        .post(`${api_url}/api/createaccount`, {
          email,
          fullname: FullName,
          phone: phonenumber,
          password,
        })
        .then((res) => {
          //console.log(res);
          //console.log(res.data);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          notifySuccess(res.data.message);
          setTimeout(() => {
            navigate("/sign-up/payment/bank", { replace: true });
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          notifyWarn(err.response.data.message);
        });
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-extrabold">Hi ,Welcome 🙂</h1>
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
      <p className="text-slate-500">
        To create an account, please enter your details
      </p>
      <form className="w-full max-w-sm mt-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-FullName"
          >
            Fullname
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Jane Doe"
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-email"
          >
            Email
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            placeholder="JaneDoe@commissionsfunnels.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-Phone"
          >
            Phone
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="tel"
            placeholder="+234 7088 888 888"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
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
            type="password"
            placeholder="********8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className="text-[#ffce1a] font-bold text-sm my-2">{error}</p>
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Confirm Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-[#ffce1a] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="********8"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <a
            className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
            href="/login"
          >
            Login
          </a>
        </div>
        <button
          className="bg-slate-900 hover:bg-[#ffce1a] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default Index;
