import React from "react";

function Stat({ icon, name, total }) {
  const colors = [
    "border-t-[#f7d9d9]",
    "border-t-[#bbf7d0]",
    "border-t-[#d9f99d]",
    "border-t-[#83cc16]",
    "border-t-[#ffce1a]",
    "border-t-[#fdbb74]",
    "border-t-[#f7d9f9]",
  ];

  const random = Math.floor(Math.random() * colors.length);

  const color = colors[random];

  return (
    <div
      className={`mb-4  border-t-[.17rem] ${color} rounded-l-lg shadow-lg  h-16 shadow-lg flex`}
    >
      <div className="w-[30%] bg-slate-900 h-16 rounded-r-lg rounded-l-lg flex justify-center items-center">
        {icon}
      </div>
      <div className="w-[70%] h-16 rounded-l-lg flex flex-col justify-center items-center">
        <h4>{name}</h4>
        <h2 className="text-2xl font-bold">{total}</h2>
      </div>
    </div>
  );
}

export default Stat;
