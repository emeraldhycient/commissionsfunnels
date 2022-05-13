import funnel from "../assets/images/sales-funnel.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="w-full bg-slate-900 h-fit pt-4  mt-6">
      <div className="mx-4 md:w-10/12 md:mx-auto mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="mb-6">
            <div className="flex items-center flex-shrink-0  mr-6">
              <h2 className="text-xl text-slate-900 font-horta font-bold flex text-white items-center">
                <span className="bg-[#ffce1a] text-white px-1">
                  Commissions
                </span>
                Funnels <img loading="lazy" src={funnel} className="h-6 w-6" />
              </h2>
            </div>
            <p className="text-gray-200 mt-4 md:mt-8">
              lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-span-4 grid grid-cols-2 md:grid-cols-4">
            <div className="mb-4 text-white text-center">
              <h4 className="text-lg font-semibold">Useful links</h4>
              <ul className="mt-4 md:mt-8">
                <li className="mt-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mt-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="mt-2">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="mt-2">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 text-white text-center">
              <h4 className="text-lg font-semibold">Information</h4>
              <ul className="mt-4 md:mt-8">
                <li className="mt-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mt-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="mt-2">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="mt-2">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 text-white text-center">
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="mt-4 md:mt-8">
                <li className="mt-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mt-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="mt-2">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="mt-2">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 text-white text-center">
              <h4 className="text-lg font-semibold">Social Media</h4>
              <ul className="mt-4 md:mt-8">
                <li className="mt-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mt-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="mt-2">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="mt-2">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 bg-slate-500">
        <div className="flex items-center justify-center text-white text-center font-medium pt-3">
          <p className="text-sm">
            © 2022 Commissionsfunnels. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
