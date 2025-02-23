import { Link } from "react-router-dom";
import productImg1 from "../../images/product1.png";
import productImg2 from "../../images/product2.jpeg";
import productImg3 from "../../images/product3.jpeg";
import cardProduct1 from "../../images/card-1.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestSellerProducts() {
  const bestSellerProducts = [
    {
      id: 1,
      imageSrc: productImg1,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item1",
      altText: "exploreImg 1",
    },
    {
      id: 2,
      imageSrc: productImg2,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item2",
      altText: "exploreImg 1",
    },
    {
      id: 3,
      imageSrc: productImg3,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item3",
      altText: "exploreImg 1",
    },
    {
      id: 4,
      imageSrc: productImg1,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item4",
      altText: "exploreImg 1",
    },
    {
      id: 5,
      imageSrc: productImg2,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item5",
      altText: "exploreImg 1",
    },
    {
      id: 6,
      imageSrc: productImg3,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item6",
      altText: "exploreImg 1",
    },
  ];

  return (
    <div className="flex justify-center md:justify-between md:px-40 md:py-5 items-center flex-wrap md:flex-nowrap">
      <div className="md:w-150">
        <div className="absolute flex flex-col p-10 font-bold text-[14px]/[24px] text-left">
          <h6 className="text-[#252B42]">FURNITURE</h6>
          <h6 className="text-[#737373]">5 Items</h6>
        </div>

        <img src={cardProduct1} alt="card1" className="md:h-222 object-cover" />
      </div>
      <div className="flex flex-col md:pb-34">
        <div className="flex flex-wrap justify-center items-center border-b-2 m-5 border-[#ECECEC]">
          <div className="font-bold text-[24px]/[32px] md:text-[16px]/[24px] text-[#252B42] py-10 md:py-0 md:px-10">
            <h3>BESTSELLER PRODUCTS</h3>
          </div>
          <div className="flex flex-col md:flex-row md:items-center font-bold text-[14px]/[24px] text-[#737373]">
            <div className="flex p-5 justify-center gap-16">
              <Link to="/">
                <h6 className="text-[#23A6F0]">Men</h6>
              </Link>
              <Link to="/">
                <h6>Women</h6>
              </Link>
              <Link to="/">
                <h6>Accessories</h6>
              </Link>
            </div>
            <div className="flex p-5 justify-center gap-10">
              <button
                onClick={console.log("Tıklandı sol")}
                className="cursor-pointer"
              >
                <div className="border rounded-4xl flex justify-center items-center p-3 text-[#BDBDBD] ">
                  <ChevronLeft />
                </div>
              </button>

              <button
                onClick={console.log("Tıklandı sag")}
                className="cursor-pointer"
              >
                <div className="border rounded-4xl flex justify-center items-center p-3 text-[#737373]">
                  <ChevronRight />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {bestSellerProducts.map((product) => (
            <>
              <Link to={product.link}>
                <div
                  key={product.id}
                  className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.altText}
                    className="w-full md:h-48 h-72"
                  />
                  <h5 className="mt-3 font-bold">{product.title}</h5>
                  <p className="text-gray-500 text-sm">{product.subtitle}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-500 line-through">
                      {product.price}
                    </span>
                    <span className="text-green-600 font-bold">
                      {product.discountPrice}
                    </span>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
