import React from "react";
import phone from "../../assets/images/phone.png";

function Herosection() {
  return (
    <section className="w-full pb-12">
      <div className="md:w-10/12 md:mx-auto mx-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 md:mt-10">
        <div className=" flex flex-col justify-center items-center  text-left">
          <h1 className="text-3xl font-bold mb-6 uppercase">
            Join The Largest Physical Product Sales and Promotion force
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            minima vero excepturi tempora facilis quam, accusantium quae
            temporibus? Minima necessitatibus maiores dignissimos architecto
            sapiente omnis earum praesentium doloribus ab ex. Reprehenderit ad
          </p>
          <div className="flex justify-between mt-8 items-center w-full pr-4">
            <button className="invisible bg-white border-[.01rem] border-slate-900 text-[#ffce1a] px-3 py-1 text-lg hover:bg-slate-900 hover:text-white hover:border[#ffce1a]">
              Learn more
            </button>
            <button className="bg-slate-900 border-[.01rem] border-slate-900 text-white px-3 py-1 text-lg hover:bg-white hover:text-slate-900 hover:border[#ffce1a]">
              Become a member
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-4 md:pt-8 items-center align-center">
          <center>
            <img
              src={phone}
              loading="lazy"
              alt="phone image showing our commission base design "
              className="w-[80%]"
            />
          </center>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
