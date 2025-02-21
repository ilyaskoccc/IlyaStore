import { Link } from "react-router-dom";
import exploreImg1 from "../../images/h5-baner-1.png";
import exploreImg2 from "../../images/h5-baner-2.png";
import exploreImg3 from "../../images/h5-baner-3.png";

export default function Explore() {
  const exploreItems = [
    {
      id: 1,
      imageSrc: exploreImg1,
      title: "Your Space",
      subtitle: "Unique Life",
      itemName: "Explore Items",
      link: "/item1",
      altText: "exploreImg 1",
    },
    {
      id: 2,
      imageSrc: exploreImg2,
      title: "Ends Today",
      subtitle: "Elements Style",
      itemName: "Explore Items",
      link: "/item2",
      altText: "exploreImg 2",
    },
    {
      id: 3,
      imageSrc: exploreImg3,
      title: "Ends Today",
      subtitle: "Elements Style",
      itemName: "Explore Items",
      link: "/item3",
      altText: "exploreImg 3",
    },
  ];

  return (
    <div className="flex justify-center md:justify-between px-29 py-15 md:py-10 md:px-40 gap-3 md:gap-0 items-center bg-[#FAFAFA] flex-wrap text-left">
      {exploreItems.map((product) => (
        <Link to={product.link} key={product.id}>
          <div className="bg-white shadow-lg rounded-lg border border-gray-200 flex items-center p-6 w-[333px] h-[232px]">
            <div>
              <p className="font-normal text-[14px]/[20px]">{product.title}</p>
              <h3 className="font-bold text-[24px]/[32px]">
                {product.subtitle}
              </h3>
              <small className="font-normal text-[12px]/[16px]">
                {product.itemName}
              </small>
            </div>

            <div>
              <img src={product.imageSrc} alt={product.altText} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
