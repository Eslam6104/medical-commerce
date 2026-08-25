import React from "react";
import Hero from "./Hero";
import Adv from "./AdvSec/Adv";
import { useGetProductsQuery } from "../store/apiSlice";
import CategoriesSection from "./Category/CategoriesSection";
import PopularBrands from "./popularBrand/PopularBrand";
import FixedSection from "./fixedSection.jsx/FixedSection";
import LatestProduct from "./latestProducts/LatestProducts";
import DealOfTheWeek from "./dealOfTheWeek/DealOfTheWeek";
import FeaturedProduct from "./featuredProduct/FeaturedProduct";
import FeatureBar from "./featureBar/FeatureBar";
import { advs1, advs2 } from "./AdvSec/advData";
import ReviewsSec from "./review/ReviewsSec";
import Error from "../customHook/Error";
import Loading from "../customHook/Loading";

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const latestProduct = products.slice(0, 30);
  const dealOfTheWeekProduct = products.filter(
    (product) => product.discount > 0
  );
  const featuredProducts = products.slice(35, 55);

  return (
    <div>
      <Hero />
      <Adv advs={advs1} />
      <CategoriesSection />
      <LatestProduct latestProduct={latestProduct} />
      <DealOfTheWeek dealOfTheWeekProduct={dealOfTheWeekProduct} />
      <FixedSection />
      <Adv advs={advs2} />
      <FeaturedProduct featuredProducts={featuredProducts} />
      <FeatureBar />
      <ReviewsSec />
      <PopularBrands />
    </div>
  );
};

export default Home;
