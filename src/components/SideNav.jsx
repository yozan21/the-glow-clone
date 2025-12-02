function SideNav({ open, setOpen }) {
  const pages = ["home", "products", "about", "partners"];
  const activePage = "home";

  return (
    <div className="flex">
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[3px] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`text-text fixed top-0 left-0 h-full w-64 bg-white p-5 transition-transform duration-300 md:static ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="mb-3 flex justify-between">
          <a href="#home">
            <img src="./logo.png" alt="glow nurture-yourself" className="h-8" />
          </a>
          <button className="mb-4 md:hidden" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          {pages.map((page) => (
            <a
              href="#"
              className={`cursor-pointer rounded-lg px-3 py-2 transition-all duration-300 ease-in ${
                activePage === page &&
                "from-brand-dark to-brand bg-linear-to-r text-white"
              }`}
            >
              {page.includes("about")
                ? `${page.charAt(0).toUpperCase() + page.slice(1)} Us`
                : page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default SideNav;
