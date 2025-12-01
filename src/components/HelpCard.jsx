function HelpCard() {
  return (
    <div className="bg-[radial-gradient(ellipse,_theme(colors.brand.dark),_theme(colors.brand))] relative mt-5 justify-between overflow-hidden rounded-3xl p-8 md:mt-30 md:overflow-visible md:p-11">
      <div>
        <h2 className="text-3xl font-medium text-white capitalize md:text-2xl">
          Need help choosing?
        </h2>
        <p className="mt-2 text-[16px] font-normal text-white md:w-3/5 md:text-sm">
          Each formula is reviewed and tested by dermatologists to ensure safe,
          effective and radiant results for every skin type.
        </p>
      </div>
      <button className="text-brand-dark mt-4 cursor-pointer rounded-3xl bg-white px-3 py-1.5 text-sm capitalize transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_3px_3px_rgba(0,0,0,0.5)] active:translate-y-0 active:shadow-[0_1px_1px_rgba(0,0,0,0.5)] md:text-[10px]">
        Get expert help
      </button>
      <div className="h-100 md:h-0">
        <img
          src="./help.png"
          alt="image of an serum"
          className="relative right-17 -bottom-31 scale-200 md:absolute md:right-0 md:-bottom-6 md:w-100 md:scale-105"
        />
      </div>
    </div>
  );
}

export default HelpCard;
