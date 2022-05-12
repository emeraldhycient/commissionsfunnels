import { BsFillCartCheckFill } from "react-icons/bs";
import shoe from "../../assets/images/shoe.jpeg";
function StoreOverview() {
  return (
    <section className="w-full h-fit pb-8">
      <div className="md:w-10/12 md:mx-auto mx-2  mt-10">
        <h2 className="text-center uppercase text-3xl font-bold">
          some Products listed on our platform
        </h2>
      </div>
      <div className="md:w-5/12 md:mx-auto mx-4  mt-8">
        <div className="grid grid-cols-4 gap-4 mb-4 border-b-[.1rem] border-[#ffce1a]">
          <div className="bg-gray-200 h-fit  w-full flex justify-center items-center">
            <img src={shoe} loading="lazy" alt="" />
          </div>
          <div className="w-full flex flex-col justify-between items-left col-span-2">
            <h4 className="text-base font-bold">
              italian soled black rubber hand crafted shoe
            </h4>
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
            </p>
            <a href="" className="my-1 md:my-4 text-sm">
              View Details
            </a>
          </div>
          <div className="w-full flex flex-col justify-between items-left">
            <div className="flex">
              <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
              <h4>234</h4>
            </div>
            <h3 className="text-lg font-bold">&#8358;34,000</h3>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4 border-b-[.1rem] border-[#ffce1a]">
          <div className="bg-gray-200 h-fit  w-full flex justify-center items-center">
            <img src={shoe} loading="lazy" alt="" />
          </div>
          <div className="w-full flex flex-col justify-between items-left col-span-2">
            <h4 className="text-base font-bold">
              italian soled black rubber hand crafted shoe
            </h4>
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
            </p>
            <a href="" className="my-1 md:my-4 text-sm">
              View Details
            </a>
          </div>
          <div className="w-full flex flex-col justify-between items-left">
            <div className="flex">
              <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
              <h4>234</h4>
            </div>
            <h3 className="text-lg font-bold">&#8358;34,000</h3>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4 border-b-[.1rem] border-[#ffce1a]">
          <div className="bg-gray-200 h-fit  w-full flex justify-center items-center">
            <img src={shoe} loading="lazy" alt="" />
          </div>
          <div className="w-full flex flex-col justify-between items-left col-span-2">
            <h4 className="text-base font-bold">
              italian soled black rubber hand crafted shoe
            </h4>
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
            </p>
            <a href="" className="my-1 md:my-4 text-sm">
              View Details
            </a>
          </div>
          <div className="w-full flex flex-col justify-between items-left">
            <div className="flex">
              <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
              <h4>234</h4>
            </div>
            <h3 className="text-lg font-bold">&#8358;34,000</h3>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4 border-b-[.1rem] border-[#ffce1a]">
          <div className="bg-gray-200 h-fit  w-full flex justify-center items-center">
            <img src={shoe} loading="lazy" alt="" />
          </div>
          <div className="w-full flex flex-col justify-between items-left col-span-2">
            <h4 className="text-base font-bold">
              italian soled black rubber hand crafted shoe
            </h4>
            <p className="text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. .
            </p>
            <a href="" className="my-1 md:my-4 text-sm">
              View Details
            </a>
          </div>
          <div className="w-full flex flex-col justify-between items-left">
            <div className="flex">
              <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
              <h4>234</h4>
            </div>
            <h3 className="text-lg font-bold">&#8358;34,000</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreOverview;
