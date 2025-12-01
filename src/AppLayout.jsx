import { useEffect, useState } from "react";
import Featured from "./sections/Featured";
import Footer from "./sections/Footer";
import { HeaderLarge, HeaderSmall } from "./sections/Header";
import Help from "./sections/Help";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Inspiration from "./sections/Inspiration";
import Stories from "./sections/Stories";

function AppLayout() {
  const [viewPort, setViewPort] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setViewPort(e.target.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // cleanup
    };
  }, []);

  return (
    <div className="font-nunito flex flex-col text-black">
      {viewPort < 500 ? <HeaderSmall /> : <HeaderLarge />}
      <main className="font-nunito mx-0 mb-4 flex flex-col text-black md:mx-8">
        <Hero viewPort={viewPort} />
        <Info />
        <Featured />
        <Inspiration viewPort={viewPort} />
        <Stories viewPort={viewPort} />
        <Help />
        <Footer viewPort={viewPort} />
      </main>
    </div>
  );
}

export default AppLayout;
