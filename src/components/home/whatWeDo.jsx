import React from "react";

function WhatWeDo() {
  return (
    <section className="w-full bg-gray-100 h-fit md:h-screen pt-4 pb-8">
      <div className="mx-4 md:w-10/12 md:mx-auto mt-8">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-2xl font-bold  uppercase text-center">
            What we Do
          </h1>
          <div className="bg-yellow-500 h-1 w-32"></div>
        </div>
        <p className="text-left mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          minima vero excepturi tempora facilis quam, accusantium quae
          temporibus? Minima necessitatibus maiores dignissimos architecto
          sapiente omnis earum praesentium doloribus ab ex. Reprehenderit ad
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea atque,
          dicta, esse amet molestiae, autem aperiam ad earum adipisci ex
          doloribus saepe sequi quo! Corrupti, mollitia. Facilis, architecto.
          Aliquam, fuga?
        </p>
        <h1 className="text-xl font-bold mb-8 uppercase text-center">
          Rapdily Growing
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 shadow py-6 rounded-sm">
          <div className=" text-center flex flex-col justify-center items-center ">
            <div className="bg-slate-900 p-3  mb-5 flex justify-center items-center h-20 w-20 rounded-full border-[.04rem] border-[#ffce1a]">
              <h3 className="text-lg text-[#ffce1a] font-extrabold">10M + </h3>
            </div>
            <h3 className="text-lg font-bold">Paid in Commissions</h3>
          </div>
          <div className=" text-center flex flex-col justify-center items-center ">
            <div className="bg-slate-900 p-3  mb-5 flex justify-center items-center h-20 w-20 rounded-full border-[.04rem] border-[#ffce1a]">
              <h3 className="text-lg text-[#ffce1a] font-extrabold"> 257 +</h3>
            </div>
            <h3 className="text-lg font-bold">Products</h3>
          </div>

          <div className=" text-center flex flex-col justify-center items-center ">
            <div className="bg-slate-900 p-3  mb-5 flex justify-center items-center h-20 w-20 rounded-full border-[.04rem] border-[#ffce1a]">
              <h3 className="text-lg text-[#ffce1a] font-extrabold">10k + </h3>
            </div>
            <h3 className="text-lg font-bold">Community members</h3>
          </div>
        </div>

        <center className="mt-16">
          <button className="bg-slate-900 border-[.01rem] border-slate-900 text-white px-4 py-2 text-lg hover:bg-[#ffce1a] hover:text-white hover:border[#ffce1a]">
            Get Started
          </button>
        </center>
      </div>
    </section>
  );
}

export default WhatWeDo;
