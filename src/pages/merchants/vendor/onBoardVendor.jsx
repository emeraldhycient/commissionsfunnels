import Layout from "../../../components/merchants/layout";
import Capturedetails from "../../../components/merchants/onboardingvendor/capturedetails";

function OnBoardVendor() {
  return (
    <Layout>
      <div className="w-full md:w-8/12 mx-auto mt-4  p-3">
        <div className="text-center bg-slate-900 text-gray-100 py-1">
          <p>
            Register as a vendor and have your products advertised by our
            salesForce all over facebook, whatsapp, twitter and instagram. even
            by word of mouth.
          </p>
          <p className="text-[#ffce1a]">Recurring #30,000 Yearly </p>
        </div>
        <Capturedetails />
      </div>
    </Layout>
  );
}

export default OnBoardVendor;
