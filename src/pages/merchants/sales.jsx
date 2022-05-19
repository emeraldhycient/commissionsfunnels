import { Link } from "react-router-dom";
import Layout from "../../components/merchants/layout";

function Sales() {
  return (
    <Layout>
      <h5 className="text-slate-900 text-sm my-4 hover:text-yellow-500">
        <Link to="/merchant/sales" className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
          </svg>
          <h6>Sales</h6>
        </Link>
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4"></div>
    </Layout>
  );
}

export default Sales;
