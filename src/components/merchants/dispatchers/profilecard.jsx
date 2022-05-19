import { Link } from "react-router-dom";

function Profilecard({ dispatcher }) {
  const { name, location, delivery, price } = dispatcher;
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
      className={`bg-white bg-gray-200 shadow rounded-3xl h-32 border ${color}`}
    >
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <div
            className={`rounded-full h-28 w-28 border-2 ${color} bg-slate-900 shadow-md flex justify-center items-center`}
          >
            <img
              src={`https://avatars.dicebear.com/api/human/${name}.svg`}
              alt="avatar"
              className=" h-20 w-20 rounded-full"
            />
          </div>
        </Link>
        <div
          className={`ml-3 w-full flex flex-col justify-evenly h-32 items-left px-3 py-1 text-left border rounded-3xl shadow`}
        >
          <h3 className="text-lg font-bold">{name}</h3>
          <h4 className="text-sm font-medium text-gray-400">
            Location : {location}
          </h4>
          <h4 className="text-sm font-medium text-gray-400">
            Delivery : {delivery}
          </h4>
          <h3 className="text-base font-semibold">Avg/kg &#8358;{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
