import { Link } from "react-router-dom";
import mostBanner2 from "../../images/most2.jpeg";
import mostProduct2 from "../../images/mostProduct2.jpeg";
import { Download } from "lucide-react";

export default function RemoveMostPopular() {
  const productColor = [
    {
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
  ];

  return (
    <>
      <div className="flex justify-center md:justify-between md:px-40 py-10 md:py-0 items-center flex-wrap-reverse md:flex-nowrap">
        <div className="flex flex-col">
          <div className="justify-center items-center md:bg-[#FAFAFA] md:pt-15 md:pb-20">
            <div className="md:p-2 p-8">
              <h3 className="font-bold text-[24px]/[32px] text-[#252B42]">
                MOST POPULAR
              </h3>
            </div>
            <div className="md:p-2">
              <p className="font-normal text-[14px]/[20px] text-[#737373] md:px-30 px-32">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <Link to="/">
              <div className="md:p-5 md:px-20 px-20">
                <img src={mostProduct2} alt="mostProduct2" />
              </div>
              <div className="p-2">
                <p className="text-[#252B42] font-bold text-[14px]/[24px]">
                  English Department
                </p>
              </div>
              <div className="text-[#737373] font-bold text-[14px]/[24px] md:flex hidden justify-center items-center gap-2 p-3">
                <span>
                  <Download />
                </span>
                <h6>15 Sales</h6>
              </div>
              <div className="p-2 flex justify-center items-center gap-2">
                <span className="text-gray-500 line-through">$16.48</span>
                <span className="text-green-600 font-bold">$6.48</span>
              </div>
              <div className="p-2 md:flex justify-center items-center hidden">
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
        <div className="pt-20 md:pt-0 ">
          <img
            src={mostBanner2}
            alt="mostBanner2"
            className="lg:h-196 object-cover"
          />
        </div>
      </div>
    </>
  );
}
