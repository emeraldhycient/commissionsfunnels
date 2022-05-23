import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Uploadform() {
  const [isTurnNextPage, setisTurnNextPage] = useState(false);

  return (
    <div className="shadow p-3">
      <form>
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
            required
          />
        </div>
        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Product Category
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            required
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-between items-center">
            <a
              href="https://blog.hubspot.com/sales/sales-copy#:~:text=What%20is%20sales%20copy%3F,business%20achieve%20its%20sales%20goals."
              className="flex items-center"
            >
              Design Your Sales copy
              <AiOutlineQuestionCircle size={20} className="text-[#ffce1a]" />
            </a>
            <a
              href="https://blog.hubspot.com/marketing/copywriting-examples"
              className="text-blue-300 border-b border-[#ffce1a] text-right"
            >
              sales copy examples
            </a>
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            placeholder="e.g 30%"
            required
          />
        </div>

        <div className="w-full px-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Delivery Locations
          </label>
          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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

export default Uploadform;
