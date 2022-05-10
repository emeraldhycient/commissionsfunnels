import { Link } from "react-router-dom";
import funnel from "../assets/images/sales-funnel.png";
import { IoMdFunnel } from "react-icons/io";
function Navbar() {
  return (
    <header className="bg-gray-100 h-[3rem] w-full">
      <nav className="w-full md:w-10/12 md:mx-auto flex items-center justify-between flex-wrap bg-gray-100 p-4">
        <div className="flex items-center flex-shrink-0  mr-6">
          <h2 className="text-xl text-slate-900 font-horta font-bold flex items-center">
            <span className="bg-[#ffce1a] text-white px-1">Commissions</span>
            Funnels <img loading="lazy" src={funnel} className="h-6 w-6" />
          </h2>
        </div>
        <ul className="hidden md:flex items-center justify-between">
          <li className="mx-4 text-base font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-base font-medium">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4 text-base font-medium">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="bg-slate-900 border-[.01rem] border-slate-900 text-white px-3 py-1 text-lg hover:bg-white hover:text-slate-900 hover:border[#ffce1a]">
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <div className="block md:hidden">
          <IoMdFunnel className="h-8 w-8" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
