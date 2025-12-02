import { useState } from "react";
import GlassContainer from "./GlassContainer";
import { FaStar } from "react-icons/fa6";

export default function StoriesCards({ viewPort }) {
  const users = [
    { id: 1, name: "Yojan Kaphle", image: "./stories-1.png" },
    { id: 2, name: "Brad Pitt", image: "./stories-2.png" },
    { id: 3, name: "Yunika Shakya", image: "./stories-3.png" },
    { id: 4, name: "Kritima Khatiwada", image: "./stories-4.png" },
    { id: 5, name: "Fatima Iraki", image: "./stories-5.png" },
  ];

  const [index, setIndex] = useState(2); // center

  // Infinite loop logic
  const next = () => setIndex((prev) => (prev + 1) % users.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + users.length) % users.length);

  // Smooth auto-move (optional)
  // useEffect(() => {
  //   const t = setInterval(next, 3000);
  //   return () => clearInterval(t);
  // }, []);

  // Build positions (centered, rotated)
  const getPosition = (i) => {
    const total = users.length;
    const offset = (i - index + total) % total;

    switch (offset) {
      case 0:
        return "z-20 scale-[1.30] opacity-100 translate-x-[1%] md:translate-x-[5%]"; // center
      case 1:
        return "z-10 translate-x-[129%]";
      case 2:
        return "z-0 translate-x-[238%]";
      case total - 1:
        return "z-10 -translate-x-[120%]";
      case total - 2:
        return "z-0 -translate-x-[230%]";
      default:
        return "opacity-0 pointer-events-none";
    }
  };

  return (
    <div className="relative right-1/2 left-1/2 mr-[-50vw] ml-[-50.6vw] w-screen overflow-hidden py-6">
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-5 z-30 -translate-y-1/2 rounded-full text-white opacity-0 transition hover:opacity-100"
      >
        <GlassContainer pad={viewPort > 500 ? "px-5 py-15" : "p-8"}>
          ‹
        </GlassContainer>
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 z-30 -translate-y-1/2 rounded-full text-white opacity-0 transition-all hover:opacity-100"
      >
        <GlassContainer pad={viewPort > 500 ? "px-5 py-15" : "p-8"}>
          ›
        </GlassContainer>
      </button>

      {/* Images */}
      <div className="relative flex h-[450px] items-center justify-center md:h-[300px]">
        {users.map((user, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-500 ease-out ${getPosition(i)} `}
          >
            <div className="relative">
              <img
                src={user.image}
                className="h-[350px] rounded-xl object-cover md:h-[250px] md:w-50"
              />
              <div className="absolute top-3 left-2">
                <GlassContainer
                  pad={viewPort > 500 ? "px-1.5 py-0.5" : "px-2.5 py-1.5"}
                >
                  <img
                    className={`-ml-0.5 h-6 rounded-full md:h-5`}
                    src={`https://i.pravatar.cc/150?u=${user.id * 2}`}
                    alt={`avatar-image-${user.id * 2}`}
                  />
                  <p className="ml-1.5 text-[10px] font-light tracking-wide md:text-[8px]">
                    {user.name}
                  </p>
                </GlassContainer>
              </div>
              <div className="absolute bottom-3 left-2">
                <GlassContainer
                  pad={viewPort > 500 ? "px-1.5 py-1" : "px-2.5 py-1.5"}
                >
                  <p className="flex items-center justify-between gap-0.5 text-xs md:text-[8px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </GlassContainer>
              </div>
              <div className="absolute right-2 bottom-3">
                <GlassContainer
                  pad={viewPort > 500 ? "px-1.5 py-1" : "px-2.5 py-1.5"}
                >
                  <p className="flex items-center justify-between gap-2 text-[10px] font-light tracking-wide md:text-[8px]">
                    <span>View Product</span> <span className="">❯</span>
                  </p>
                </GlassContainer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
