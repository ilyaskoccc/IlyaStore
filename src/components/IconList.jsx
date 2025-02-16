import { Link } from "react-router-dom";
import vector1 from "../../images/vector-1.png";
import vector2 from "../../images/vector-2.png";
import vector3 from "../../images/vector-3.png";
import vector4 from "../../images/vector-4.png";
import vector5 from "../../images/vector-5.png";
import vector6 from "../../images/vector-6.png";

export default function IconList() {
  const icons = [
    {
      id: 1,
      imageSrc: vector1,
      link: "/",
      altText: "Icon 1",
    },
    {
      id: 2,
      imageSrc: vector2,
      link: "/",
      altText: "Icon 2",
    },
    {
      id: 3,
      imageSrc: vector3,
      link: "/",
      altText: "Icon 3",
    },
    {
      id: 4,
      imageSrc: vector4,
      link: "/",
      altText: "Icon 4",
    },
    {
      id: 5,
      imageSrc: vector5,
      link: "/",
      altText: "Icon 5",
    },
    {
      id: 6,
      imageSrc: vector6,
      link: "/",
      altText: "Icon 6",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center sm:justify-between gap-16 items-center py-20 md:px-24 bg-[#FAFAFA]">
      {icons.map((icon) => (
        <Link to={icon.link} key={icon.id}>
          <div className="flex justify-center items-center">
            <img src={icon.imageSrc} alt={icon.altText} />
          </div>
        </Link>
      ))}
    </div>
  );
}
