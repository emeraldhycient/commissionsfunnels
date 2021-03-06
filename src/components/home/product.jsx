import { BsFillCartCheckFill } from "react-icons/bs";
import shoe from "../../assets/images/shoe.jpeg";

function Product({ data }) {
  //remeber add the affliate link to the copy
  const copyLink = () => {
    //copy to clipboard
    const link = `https://commissionsfunnels.com/product/${data.id}/${data.product_name}`;
    if (navigator.clipboard.writeText(link)) {
      alert(`Link Copied to Clipboard
       ${link}`);
      return;
    }
    //fallback support for older browsers
    const linkfield = document.getElementById("link");
    linkfield.select();
    document.execCommand("copy");
    alert(`
      Link Copied to Clipboard@
      ${link}
    `);
  };

  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className=" mb-4 border-b-[.1rem] border-[#ffce1a] shadow-lg pt-2">
      <div className="bg-gray-50 h-40 w-full flex justify-center items-center">
        <img src={shoe} loading="lazy" className="h-40 w-full" alt="" />
      </div>
      <div className="w-full flex flex-col justify-between items-left px-2 ">
        <h4 className="text-base font-bold">{data.product_name}</h4>
        <a
          href={`/product/${data.id}/${data.product_name}`}
          className="my-1 md:my-2 text-sm"
        >
          View Details
        </a>
      </div>
      <div className="w-full flex  justify-between items-left px-2 ">
        <div className="flex">
          <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
          <h4>{data.sold}</h4>
        </div>
        <h3 className="text-lg font-bold">&#8358;{data.product_price}</h3>
      </div>
      <div className="w-full flex justify-between items-left mt-4 bg-gray-200 p-2">
        <h4>com: {data.product_commission}%</h4>
        <button
          onClick={(e) => copyLink()}
          className="bg-white rounded-full p-1 md:px-4 border-[.1rem] border-slate-900 text-slate-500 hover:text-blue-400 hover:border-yellow-500 flex justify-center items-center"
        >
          copy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </button>
        <textarea
          value={`https://commissionsfunnels.com/product/${data.id}/${data.product_name}`}
          id="link"
          className="hidden"
        />
      </div>
    </div>
  );
}

export default Product;
