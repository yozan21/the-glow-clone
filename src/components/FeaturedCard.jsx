function FeaturedCard({ feature }) {
  return (
    <div className="bg-surface flex flex-col justify-between gap-5 rounded-3xl p-4 md:rounded-2xl md:p-3.5">
      <div className="flex items-center justify-center justify-self-center p-0.5">
        <img
          src={feature.image}
          alt={feature.description}
          className="w-3/4 md:w-1/2"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-text text-lg font-semibold capitalize md:text-[13px] md:font-medium">
          {feature.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium md:text-lg md:font-semibold">
            ${feature.price}.00
          </p>
          <button className="from-brand-dark to-brand-light text-surface hover:shadow-[0_3px_3px_theme(colors.brand.light)] active:shadow-[0_1px_1px_theme(colors.brand.light)] cursor-pointer rounded-3xl bg-linear-130 px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 md:py-1.5 md:text-[9px]">
            Get now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
