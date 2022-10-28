import React from "react";
import ProductLayout from "../../modules/Products/components/ProductLayout";
import ProductGrid from "../../modules/Products/components/ProductGrid";
import ProductGridHeader from "../../modules/Products/components/ProductGridHeader";

export default class App extends React.Component {
  render() {
    return (
      <ProductLayout header={<ProductGridHeader/>}>
        <ProductGrid/>
      </ProductLayout>
    );
  }
}
