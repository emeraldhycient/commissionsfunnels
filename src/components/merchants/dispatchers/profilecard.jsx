import { Link } from "react-router-dom";

function Profilecard({ dispatcher }) {
  const {
    company_name,
    company_location,
    company_delivery_zone,
    delivery_fee,
    company_images,
  } = dispatcher;
  const colors = [
    "border-[#f7d9d9]",
    "border-[#bbf7d0]",
    "border-[#d9f99d]",
    "border-[#83cc16]",
    "border-[#ffce1a]",
    "border-[#fdbb74]",
    "border-[#f7d9f9]",
  ];

  const random = Math.floor(Math.random() * colors.length);

  const color = colors[random];

  return (
    <div
      className={`bg-white bg-gray-200 shadow rounded-3xl h-fit border ${color}`}
    >
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <div
            className={`rounded-full h-28 w-28 border-2 ${color} bg-slate-900 shadow-md flex justify-center items-center`}
          >
            <img
              src={`https://avatars.dicebear.com/api/human/${company_name}.svg`}
              alt="avatar"
              className=" h-20 w-20 rounded-full"
            />
          </div>
        </Link>
        <div
          className={`ml-3 w-full flex flex-col justify-evenly h-full items-left px-3 py-1 text-left border rounded-3xl shadow`}
        >
          <h3 className="text-lg font-bold ">{company_name}</h3>
          <h4 className="text-sm font-medium text-gray-400">
            Location : {company_location}
          </h4>
          <h4 className="text-sm font-medium text-gray-400">
            Delivery : {company_delivery_zone}
          </h4>
          <h3 className="text-base font-semibold">
            Avg/kg &#8358;{delivery_fee}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
