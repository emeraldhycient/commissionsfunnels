import { Link } from "react-router-dom";
import Layout from "../../components/merchants/layout";
import List from "../../components/merchants/sales/list";

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
      <div className=" mt-4 shadow py-5 overflow-x-auto mb-4">
        <table className="table-auto text-center border border-gray-200 mx-auto">
          <thead>
            <tr className="text-sm text-gray-400">
              <th className="w-fit p-4 text-center border-r border-gray-200">
                Transaction ID
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Product name
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Price{" "}
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Commission
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Payment Status
              </th>
              <th className="w-fit p-4 text-center  border-r border-gray-200">
                Sold on
              </th>
            </tr>
          </thead>
          <tbody>
            <List />
            <List />
            <List />
            <List />
            <List />
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Sales;
