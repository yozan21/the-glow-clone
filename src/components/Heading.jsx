function Heading({ title = "", sub = "", children }) {
  return (
    <div className="mb-8 flex flex-col items-center justify-center md:mb-6">
      <h2 className="text-center text-2xl md:text-3xl">{title}</h2>
      {children ?? children}
      <p className="text-accent text-md text-center md:text-lg">{sub}</p>
    </div>
  );
}

export default Heading;
