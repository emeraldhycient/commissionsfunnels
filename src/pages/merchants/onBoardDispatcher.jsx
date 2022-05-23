import Layout from "../../components/merchants/layout";
import Capturedetails from "../../components/merchants/onboardingdispatcher/capturedetails";

function OnBoardDispatcher() {
  return (
    <Layout>
      <div className="w-full md:w-8/12 mx-auto mt-4  p-3">
        <div className="text-center bg-slate-900 text-gray-100 py-1">
          <p>Start getting unlimited gigs by signing up as a dispatcher</p>
          <p className="text-[#ffce1a]">
            one free month, renewal at #2,000 Monthly
          </p>
        </div>
        <Capturedetails />
      </div>
    </Layout>
  );
}

export default OnBoardDispatcher;
