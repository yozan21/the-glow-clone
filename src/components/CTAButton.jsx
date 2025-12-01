function CTAButton({ type = "primary", link, children }) {
  let defaultStyle =
    "rounded-4xl px-3 py-2 md:py-1.5 text-xs font-semibold md:font-medium md:text-[11px] hover:bg-brand-dark hover:text-white transition-all delay-100 duration-300 ease-in cursor-pointer ";
  type === "secondary"
    ? (defaultStyle += "bg-white text-[#333333]")
    : (defaultStyle +=
        "md:font-normal relative border border-s-0 border-e-0 border-t-white/30 border-b-white/30 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-3xl");
  return <button className={defaultStyle}>{children}</button>;
}

export default CTAButton;
