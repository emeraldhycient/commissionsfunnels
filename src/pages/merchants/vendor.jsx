import { Link } from "react-router-dom";
import Layout from "../../components/merchants/layout";
import Product from "../../components/merchants/vendor/product";
import Stat from "../../components/merchants/vendor/stat";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiStore3Line } from "react-icons/ri";
import NonVendors from "../../components/merchants/vendor/nonVendors";

function Vendor() {
  return (
    <Layout>
      <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
        <Link to="/merchant/vendor" className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
          <h6>Vendor</h6>
        </Link>
      </h5>
      {/*
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4">
        <Stat
          name="products"
          total={34246}
          icon={<RiStore3Line size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="sold"
          total={34575}
          icon={<BiTransfer size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="Earnings"
          total={367854}
          icon={<FcMoneyTransfer size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="products"
          total={397864}
          icon={
            <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
          }
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        </div>*/}
      <NonVendors />
    </Layout>
  );
}

export default Vendor;