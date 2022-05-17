import Layout from "../../components/merchants/layout";
import Product from "../../components/merchants/marketplace/product";

function Marketplace() {
  return (
    <Layout>
      marketplace
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

export default Marketplace;
