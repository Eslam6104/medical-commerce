import React from "react";
import ShopProducts from "./ShopProducts";
import { useOutletContext } from "react-router-dom";
import ShopListView from "./ShopListView";

const Shop = () => {
  const { selectedListView, setSlectedListView, filteredPageProducts, paginated } =
    useOutletContext();

  return (
    <>
      <ShopListView
        selectedListView={selectedListView}
        setSlectedListView={setSlectedListView}
        products={filteredPageProducts}
      />
      <ShopProducts products={paginated} selectedListView={selectedListView} />
    </>
  );
};

export default Shop;
