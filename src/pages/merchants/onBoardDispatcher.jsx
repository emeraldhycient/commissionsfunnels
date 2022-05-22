import Layout from "../../components/merchants/layout";
import Capturedetails from "../../components/merchants/onboardingdispatcher/capturedetails";

function OnBoardDispatcher() {
  return (
    <Layout>
      <div className="w-8/12 mx-auto mt-4  p-3">
        <p>Bold steps starts from just a simple tap of a button</p>
        <Capturedetails />
      </div>
    </Layout>
  );
}

export default OnBoardDispatcher;
