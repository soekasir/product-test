import React from "react";
import ProductLayout from "../../components/Layouts/Product.Layout";
import ProductGrid from "../../modules/Products/ProductGrid";
import ProductGridHeader from "../../modules/Products/ProductGridHeader";

export default class App extends React.Component {
  render() {
    return (
      <ProductLayout header={<ProductGridHeader/>}>
        <ProductGrid/>
      </ProductLayout>
    );
  }
}
