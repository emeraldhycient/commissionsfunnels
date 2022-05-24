import React from "react";

function Cards({ title, count, icon }) {
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
    <div className="h-fit bg-white   rounded-lg hover:shadow-lg pb-4">
      <div
        className={`h-20 bg-slate-900 border-2 ${color}  flex justify-center items-center`}
      >
        <div className="rounded-full h-12 w-12 bg-yellow-500  flex justify-center items-center text-white">
          {icon}
        </div>
      </div>
      <h6 className="text-sm font-semibold text-center my-2"> {title}</h6>
      <h3 className="text-lg font-bold text-center">{count}</h3>
    </div>
  );
}

export default Cards;
