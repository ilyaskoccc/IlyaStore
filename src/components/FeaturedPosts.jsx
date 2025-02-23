import { Link } from "react-router-dom";
import fPosts1 from "../../images/fPosts1.jpeg";
import fPosts2 from "../../images/fPosts2.jpeg";
import fPosts3 from "../../images/fPosts3.jpeg";
import { AlarmClock, ArrowBigRight, LineChart } from "lucide-react";

const posts = [
  {
    id: 1,
    image: fPosts1,
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    link: "/post/1",
  },
  {
    id: 2,
    image: fPosts2,
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    link: "/post/2",
  },
  {
    id: 3,
    image: fPosts3,
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
    link: "/post/3",
  },
];

export default function FeaturedPosts() {
  return (
    <div>
      <div className="py-20">
        <h6 className="font-bold text-[14px]/[24px] text-[#23A6F0]">
          Practice Advice
        </h6>
        <h2 className="font-bold text-[40px]/[50px] text-[#252B42]">
          Featured Posts
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center sm:justify-between gap-16 items-center pb-30 md:px-40 text-left">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full sm:max-w-[320px] md:max-w-[348px] mx-auto flex flex-col"
          >
            <div className="relative w-full h-[300px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-sm text-[#737373]">
                <span className="text-[#8EC2F2]">Google</span>
                <span className="px-5 md:px-3">Trending</span>
                <span>New</span>
              </p>
              <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
              <p className="text-[#737373] mt-2 text-[14px]/[20px]">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                <span className="flex items-center gap-1">
                  <AlarmClock className="text-[#23A6F0] w-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <LineChart className="text-[#23856D] w-4" /> {post.comments}
                </span>
              </div>
              <Link
                to={post.link}
                className="flex text-[#737373] font-semibold mt-4 hover:underline"
              >
                Learn More <ArrowBigRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
