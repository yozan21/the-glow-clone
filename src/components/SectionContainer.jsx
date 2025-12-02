function SectionContainer({ name, children }) {
  return (
    <section id={name} className="my-8 px-8 md:my-12 md:px-6">
      {children}
    </section>
  );
}

export default SectionContainer;
