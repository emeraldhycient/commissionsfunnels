import React from "react";
import { Link } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import funnel from "../assets/images/sales-funnel.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="h-fit md:h-16 py-8 md:py-0 bg-gray-100  border-t border-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6">
        <div className="h-full flex justify-center items-center">
          <div className="bg-slate-900  h-8 w-8 mx-3 flex justify-center items-center">
            <a href="mailto:gofitish@gmail.com">
              <MdMarkEmailUnread size={22} className="text-amber-500" />
            </a>
          </div>
          <div className="bg-slate-900  h-8 w-8 mx-3 flex justify-center items-center">
            <a href="https://wa.me/2347088639675">
              <ImWhatsapp className="text-amber-500" />
            </a>
          </div>
          <div className="bg-slate-900  h-8 w-8 mx-3 flex justify-center items-center">
            <BsTwitter className="text-amber-500" />
          </div>
          <div className="bg-slate-900  h-8 w-8 mx-3 flex justify-center items-center">
            <BsLinkedin className="text-amber-500" />
          </div>
        </div>

        <div className="h-full  flex  justify-center items-center">
          ©️ {year}
          <h1 className="font-extrabold text-lg text-slate-900 font-horta  flex ml-3">
            <span className="text-white bg-[#ffce1a] px-1">commissions</span>
            Funnels <img loading="lazy" src={funnel} className="h-6 w-6" />
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Footer;
