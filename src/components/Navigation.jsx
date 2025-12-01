function Navigation() {
  const pages = ["home", "products", "about", "partners"];
  const activePage = "home";

  return (
    <nav>
      <ul className="border-boundry text-text flex items-center gap-2 rounded-4xl border p-0.5 text-[10px] capitalize">
        {pages.map((page) => (
          <li key={page}>
            <button
              // onClick={() => scrollToSection(section)}
              className={`cursor-pointer rounded-4xl px-3 py-1 transition-all duration-300 ease-in ${
                activePage === page
                  ? "from-brand-dark to-brand-light bg-linear-to-r text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page.includes("about")
                ? `${page.charAt(0).toUpperCase() + page.slice(1)} Us`
                : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
