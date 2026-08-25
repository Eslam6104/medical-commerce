import React from "react";
import SwiperContainer from "../SwiperContainer";

const LatestProduct = ({ latestProduct }) => {
  return (
    <SwiperContainer
      headerOfSection="Latest Products"
      products={latestProduct}
      xsBreakPoint={1}
      smBreakPoint={2}
      mdBreakPoint={2.4}
      lgBreakPoint={3.4}
    />
  );
};

export default LatestProduct;
