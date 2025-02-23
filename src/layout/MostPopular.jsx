import { Link } from "react-router-dom";
import mostBanner1 from "../../images/most1.jpeg";
import mostProduct1 from "../../images/mostProduct1.jpeg";
import { Download } from "lucide-react";

export default function MostPopular() {
  const mostPopularRules = [
    {
      id: 1,
      title: "Easy to use",
      subtitle: "Things on a very small that you have any direct",
    },
    {
      id: 2,
      title: "Easy to use",
      subtitle: "Things on a very small that you have any direct",
    },
    {
      id: 3,
      title: "Easy to use",
      subtitle: "Things on a very small that you have any direct",
    },
    {
      id: 4,
      title: "Easy to use",
      subtitle: "Things on a very small that you have any direct",
    },
  ];

  const productColor = [
    {
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
  ];

  return (
    <>
      <div className="flex justify-center md:justify-between md:px-40 items-center flex-wrap md:flex-nowrap">
        <div className="px-2 pt-20 md:px-0 md:pt-0 ">
          <img
            src={mostBanner1}
            alt="mostBanner1"
            className="lg:h-207.5 object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="justify-center items-center md:bg-[#FAFAFA] md:pt-15 md:pb-10">
            <div className="md:p-2 p-8">
              <h3 className="font-bold text-[24px]/[32px] text-[#252B42]">
                MOST POPULAR
              </h3>
            </div>
            <div className="md:p-2">
              <p className="font-normal text-[14px]/[20px] text-[#737373] md:px-31 px-32">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <Link to="/">
              <div className="md:p-5 md:px-0 px-20">
                <img src={mostProduct1} alt="mostProduct1" />
              </div>
              <div className="p-2">
                <p className="text-[#252B42] font-bold text-[14px]/[24px]">
                  English Department
                </p>
              </div>
              <div className="text-[#737373] font-bold text-[14px]/[24px] flex justify-center items-center gap-2 p-3 md:hidden">
                <span>
                  <Download />
                </span>
                <h6>15 Sales</h6>
              </div>
              <div className="p-2 flex justify-center items-center gap-2">
                <span className="text-gray-500 line-through">$16.48</span>
                <span className="text-green-600 font-bold">$6.48</span>
              </div>
              <div className="p-2 flex justify-center items-center md:hidden">
                {productColor[0].colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-4 h-4 rounded-full ${color} mx-1`}
                  ></span>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between md:px-40 items-center flex-wrap md:flex-nowrap py-25 md:py-15 gap-6 md:gap-30 text-left">
        {mostPopularRules.map((product) => (
          <div
            key={product.id}
            className="flex justify-center items-center gap-4 md:gap-6"
          >
            <h2 className="font-bold text-[40px]/[50px] text-[#E74040]">{`${product.id}.`}</h2>
            <div className="flex flex-col justify-center items-start">
              <h6 className="font-bold text-[14px]/[24px] text-[#252B42]">
                {product.title}
              </h6>
              <small className="font-normal text-[12px]/[16px] text-[#737373]">
                {product.subtitle}
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
