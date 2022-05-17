import React from "react";

function Stat({ icon, name, total }) {
  return (
    <div className=" mb-4  border-t-[.1rem] border-t-green-200 shadow-lg  h-16 shadow-lg flex">
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
