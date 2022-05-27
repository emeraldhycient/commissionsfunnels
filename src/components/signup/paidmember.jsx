import React from "react";
import Layout from "../layout";
import { Link, useParams } from "react-router-dom";
import Bank from "./bank";
import Crypto from "./crypto";

function Paidmember() {
  const { method } = useParams();

  return (
    <Layout>
      <div className="w-full md:w-5/12 px-2 md:mx-auto bg-white shadow h-fit mt-10 ">
        <div className="flex justify-between items-center">
          <Link
            to="/sign-up/payment/bank"
            className={`border ${
              method === "bank" ? "bg-slate-900 text-white" : "text-slate-900"
            } border-gray-200 p-2`}
          >
            Bank Transfer
          </Link>
          <Link
            to="/sign-up/payment/crypto"
            className={`border ${
              method === "crypto" ? "bg-slate-900 text-white" : "text-slate-900"
            } border-gray-200 p-2`}
          >
            Crypto Transfer
          </Link>
        </div>
        <p className="p-2 text-sm text-gray-400">
          you can make payment now to become an eligible affliate or you can
          skip and purchase a product worth #30,000 to become eligible.
        </p>
        <div className="mx-auto my-12 flex justify-center items-center">
          {method === "bank" ? <Bank /> : <Crypto />}
        </div>
        <h6 className="ml-2 text-slate-300">
          <Link to="/merchant/dashboard"> Skip to Dashboard</Link>
        </h6>
      </div>
    </Layout>
  );
}

export default Paidmember;
