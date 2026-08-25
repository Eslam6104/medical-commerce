import React from "react";
import SwiperContainer from "../SwiperContainer";

const DealOfTheWeek = ({ dealOfTheWeekProduct }) => {
  return (
    <SwiperContainer
      headerOfSection="Deal Of The Week"
      products={dealOfTheWeekProduct}
      xsBreakPoint={1}
      smBreakPoint={1}
      mdBreakPoint={1}
      lgBreakPoint={2}
    />
  );
};

export default DealOfTheWeek;
