function GlassContainer({ pad, children }) {
  return (
    <div
      className={`border-t-boundry border-b-boundry relative flex items-center rounded-4xl border border-s-0 border-e-0 ${pad} cursor-pointer text-white backdrop-blur-[5px]`}
    >
      {children}
    </div>
  );
}

export default GlassContainer;
