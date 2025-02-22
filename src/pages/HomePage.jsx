import BestSellerProducts from "../components/BestSellerProducts";
import Carousel from "../components/Carousel";
import Explore from "../components/Explore";
import IconList from "../components/IconList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <Explore />
      <BestSellerProducts />
      <IconList />
      <Footer />
    </>
  );
}
