import SwiperContainer from "../HomePage/SwiperContainer";

const RelatedProductsSwiper = ({ products }) => (
  <SwiperContainer
    headerOfSection="Related products"
    products={products}
    xsBreakPoint={1}
    smBreakPoint={2}
    mdBreakPoint={2.4}
    lgBreakPoint={3.4}
  />
);

export default RelatedProductsSwiper;
