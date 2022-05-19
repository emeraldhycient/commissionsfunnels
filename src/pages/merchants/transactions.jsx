import { Link } from "react-router-dom";
import Layout from "../../components/merchants/layout";

function Transactions() {
  return (
    <Layout>
      <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
        <Link to="/merchant/transactions" className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          <h6>Transactions</h6>
        </Link>
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4"></div>
    </Layout>
  );
}

export default Transactions;
