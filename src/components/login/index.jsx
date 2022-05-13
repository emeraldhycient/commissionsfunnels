import React from "react";

function Index() {
  return (
    <section>
      <h1 className="text-2xl font-extrabold">Welcome Back</h1>
      <p className="text-slate-500">Welcome back, please enter your details</p>
      <form className="w-full max-w-sm mt-6">
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
          type="button"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}

export default Index;
