function InfoCard({ info }) {
  return (
    <div className="flex flex-col">
      <img
        src={info.image}
        alt={`Image of ${info.title}`}
        className="inline-block"
      />
      <p className="text-text mt-6 text-xl font-medium md:mt-3">
        {info.title.charAt(0).toUpperCase() + info.title.slice(1)}
      </p>
      <p className="text-accent md:text-[11px] md:font-medium">
        {info.description}
      </p>
    </div>
  );
}

export default InfoCard;
