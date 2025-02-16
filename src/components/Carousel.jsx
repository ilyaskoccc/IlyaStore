import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import slide1 from "../../images/burger.jpg";
import slide2 from "../../images/pizza.jpg";
import slide3 from "../../images/sandwich.jpg";

export default function Carousel() {
  const history = useHistory();

  const slides = [
    {
      id: 1,
      image: slide1,
      subtitle: "GROCERIES DELIVERY",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "Start Now",
    },
    {
      id: 2,
      image: slide2,
      subtitle: "GROCERIES DELIVERY",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "Start Now",
    },
    {
      id: 3,
      image: slide3,
      subtitle: "GROCERIES DELIVERY",
      description:
        "We know how large objects will act, but things on a small scale.",
      buttonText: "Start Now",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div
                className="relative h-156 md:h-172 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-12">
                  <h2 className="text-[40px]/[50px] sm:text-[58px]/[80px] font-bold text-white mb-4 drop-shadow-md">
                    {slide.subtitle}
                  </h2>
                  <h4 className="text-[20px]/[30px] font-normal text-white mb-6 px-22 md:px-[450px] drop-shadow-md">
                    {slide.description}
                  </h4>
                  <div className="md:flex gap-3">
                    <button
                      onClick={() => history.push("/shop")}
                      className="px-5 py-2 font-bold text-[24px]/[32px] bg-[#23A6F0] text-white rounded-md shadow-lg hover:bg-green-600 transition"
                    >
                      <h3>{slide.buttonText}</h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white p-2 rounded-full transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-[44px] h-[44px]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white p-2 rounded-full transition"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-[44px] h-[44px]" />
      </button>

      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white "
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
