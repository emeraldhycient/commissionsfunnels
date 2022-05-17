import Layout from "../../components/merchants/layout";
import Product from "../../components/merchants/vendor/product";
import Stat from "../../components/merchants/vendor/stat";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { FcMoneyTransfer } from "react-icons/fc";

function Vendor() {
  return (
    <Layout>
      <h4>Vendor</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4">
        <Stat
          name="products"
          total={34246}
          icon={
            <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
          }
        />
        <Stat
          name="sold"
          total={34575}
          icon={<BiTransfer size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="Earnings"
          total={367854}
          icon={<FcMoneyTransfer size={25} className="text-[#ffce1a] mr-2" />}
        />
        <Stat
          name="products"
          total={397864}
          icon={
            <BsFillCartCheckFill size={25} className="text-[#ffce1a] mr-2" />
          }
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Layout>
  );
}

export default Vendor;
