import BestSellerProducts from "../components/BestSellerProducts";
import Carousel from "../components/Carousel";
import Explore from "../components/Explore";
import IconList from "../components/IconList";
import RemoveBestSellerProducts from "../components/RemoveBestSellerProdcts";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MostPopular from "../layout/MostPopular";
import RemoveMostPopular from "../layout/RemoveMostPopular";

export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <Explore />
      <BestSellerProducts />
      <MostPopular />
      <RemoveBestSellerProducts />
      <RemoveMostPopular />
      <IconList />
      <Footer />
    </>
  );
}
