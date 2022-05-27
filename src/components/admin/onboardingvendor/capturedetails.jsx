import React from "react";

function Capturedetails() {
  return (
    <div className="shadow p-3">
      <form>
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
            required
            important
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
            required
            important
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
            required
            important
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
            required
            important
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Company Images
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="file"
            placeholder="e.g support@commissionsfunnels.com"
            required
            important
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Delivery Locations
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            required
            important
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
