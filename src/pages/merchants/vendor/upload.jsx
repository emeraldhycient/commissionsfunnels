import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/merchants/layout";
import Uploadform from "../../../components/merchants/vendor/uploadform";

function Upload() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.is_vendor) navigate("/merchant/vendor", { replace: true });
  }, [user.is_vendor]);

  return (
    <Layout>
      <div className="w-full md:w-8/12 mx-auto mt-4  p-3">
        <div className="text-center bg-slate-900 text-gray-100 py-1">
          <p>
            Upload Your product and have your products advertised by our
            salesForce all over facebook, whatsapp, twitter and instagram. even
            by word of mouth.
          </p>
          <p className="text-[#ffce1a]">you currently have 2 product slots </p>
        </div>
        <Uploadform />
      </div>
    </Layout>
  );
}

export default Upload;
