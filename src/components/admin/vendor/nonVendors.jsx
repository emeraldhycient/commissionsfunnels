import { Link } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

function NonVendors() {
  return (
    <div className="w-full h-[80vh] text-center flex flex-col justify-center items-center">
      <FaSadCry size={100} className="text-yellow-500" />
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Hello there , Sorry but you cant access this page because you are not a
        vendor yet.
      </h1>
      <p>
        follow this link to register as a vendor{" "}
        <Link to="/" className="text-yellow-500 border-b border-blue-400">
          REGISTER
        </Link>
      </p>
    </div>
  );
}

export default NonVendors;
