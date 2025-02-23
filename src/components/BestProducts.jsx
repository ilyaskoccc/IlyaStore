import { Link } from "react-router-dom";
import productImg1 from "../../images/bestProduct1.png";
import productImg2 from "../../images/bestProduct2.jpeg";
import productImg3 from "../../images/bestProduct3.jpeg";
import productImg4 from "../../images/bestProduct4.jpeg";

export default function BestProducts() {
  const bestProducts = [
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
      altText: "exploreImg 2",
    },
    {
      id: 3,
      imageSrc: productImg3,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item3",
      altText: "exploreImg 3",
    },
    {
      id: 4,
      imageSrc: productImg4,
      title: "Graphic Design",
      subtitle: "English Department",
      price: "$16.48",
      discountPrice: "$6.48",
      link: "/item4",
      altText: "exploreImg 4",
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex justify-center md:justify-between md:mx-40 py-10 md:pb-5 items-center border-b-2 border-[#ECECEC]">
        <div className="font-bold text-[24px]/[32px]">
          <h3>BESTSELLER PRODUCTS</h3>
        </div>
      </div>
      <div className="flex justify-center md:justify-between md:px-40 items-center flex-wrap md:flex-nowrap py-5 md:py-5 gap-6 md:gap-30">
        {bestProducts.map((product) => (
          <>
            <Link to={product.link}>
              <div
                key={product.id}
                className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.imageSrc}
                  alt={product.altText}
                  className="md:w-48 w-72 md:h-48 h-72"
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
  );
}
