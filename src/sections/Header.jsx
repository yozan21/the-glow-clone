import { useState } from "react";
import Navigation from "../components/Navigation";
import SideNav from "../components/SideNav";

function HeaderLarge() {
  return (
    <header className="sticky top-0 z-50 bg-white px-16 py-2">
      <div className="flex items-center justify-between">
        <a href="#home">
          <img src="./logo.png" alt="glow nurture-yourself" className="h-8" />
        </a>
        <Navigation />
      </div>
    </header>
  );
}

function HeaderSmall() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-1">
      <div className="border-boundry flex items-center justify-between rounded-4xl border px-8 py-2">
        <a href="#home">
          <img src="./logo.png" alt="glow nurture-yourself" className="h-8" />
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="bg-text before:bg-text after:bg-text relative h-0.5 w-5.5 rounded-xl before:absolute before:-top-2 before:left-0 before:h-0.5 before:w-5.5 before:rounded-xl before:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-5.5 after:rounded-xl after:content-['']"
        ></button>
      </div>
      <SideNav open={open} setOpen={setOpen} />
    </header>
  );
}

export { HeaderLarge, HeaderSmall };
