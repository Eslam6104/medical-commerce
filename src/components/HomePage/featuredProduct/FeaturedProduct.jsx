import React from 'react'
import SwiperContainer from '../SwiperContainer';

const FeaturedProduct = ({ featuredProducts }) => {
  return (
    <SwiperContainer
      headerOfSection="Featured Products"
      products={featuredProducts}
      xsBreakPoint={1}
      smBreakPoint={2}
      mdBreakPoint={2.4}
      lgBreakPoint={3.4}
    />
  );
};

export default FeaturedProduct
