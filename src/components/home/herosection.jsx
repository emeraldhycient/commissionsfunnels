import React from "react";
import phoneman from "../../assets/images/phoneman.gif";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <section className="w-full pb-12">
      <div className="md:w-10/12 md:mx-auto mx-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 md:mt-10">
        <div className=" flex flex-col justify-center items-center  text-left">
          <h1 className="text-3xl font-extrabold mb-6 uppercase">
            Join The Largest Physical Product Sales and Promotion force
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            minima vero excepturi tempora facilis quam, accusantium quae
            temporibus? Minima necessitatibus maiores dignissimos architecto
            sapiente omnis earum praesentium doloribus ab ex. Reprehenderit ad
          </p>
          <div className="flex justify-between mt-8 items-center w-full pr-4">
            <button className="rounded-md bg-slate-900 border-[.01rem] border-slate-900 text-white px-3 py-1  hover:bg-white hover:text-slate-900 hover:border[#ffce1a]">
              <Link to="/onboard/" className="text-white hover:text-slate-900">
                <h6 className="text-md font-semibold mb-1">
                  Get Started Today{" "}
                </h6>
                <p className="text-xs">
                  Join The No.1 Physical Product Distribution Network In Nigeria
                </p>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center pt-4 md:pt-8 items-center align-center">
          <center>
            <img
              src={phoneman}
              loading="lazy"
              alt="phone image showing our commission base design "
              className="w-[100%]  md:h-[70vh]"
            />
          </center>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
