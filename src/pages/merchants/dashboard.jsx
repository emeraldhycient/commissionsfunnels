import { Link } from "react-router-dom";
import Cards from "../../components/merchants/dashboard/cards";
import Layout from "../../components/merchants/layout";
import { FcShop } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdOutlineTransferWithinAStation } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSavings } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

function Dashboard() {
  return (
    <Layout>
      <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
        <Link to="/merchant/dashboard" className="flex items-center ">
          <svg
            className="h-5 w-5 mr-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <h6>Dashboard</h6>
        </Link>
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2 mb-8 bg-gray-100 py-2 px-2 rounded-lg">
        <Cards
          title="affliate Sales"
          count={2345}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
          }
        />
        <Cards
          title="affliate Commissions earned"
          count={2345}
          icon={<GrMoney className="text-gray-500 rounded-lg" size={25} />}
        />
        <Cards
          title="Total aff commiss Paid Out"
          count={2345}
          icon={<FaMoneyCheck className="text-gray-500" size={25} />}
        />
        <Cards
          title="Pending Payout aff commiss"
          count={2345}
          icon={<GiTakeMyMoney className="text-gray-500" size={25} />}
        />
        <Cards
          title="total products"
          count={2345}
          icon={<FcShop size={25} className="text-gray-500" />}
        />
        <Cards
          title="sold products"
          count={2345}
          icon={<FcMoneyTransfer className="text-gray-500" size={25} />}
        />
        <Cards
          title=" products revenue"
          count={2345}
          icon={<MdOutlineSavings className="text-gray-500" size={25} />}
        />
        <Cards
          title="funnels visit"
          count={2345}
          icon={
            <MdOutlineTransferWithinAStation
              className="text-gray-500"
              size={25}
            />
          }
        />
      </div>
    </Layout>
  );
}

export default Dashboard;
