function InspoCard({ inspo }) {
  return (
    //
    <div className="group relative flex-1 overflow-clip text-nowrap transition-all duration-800 hover:flex-2">
      <img
        src={inspo.image}
        alt={inspo.text}
        className="h-80 w-full object-cover"
      />

      <p className="absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {inspo.text}
      </p>
    </div>
  );
}

export default InspoCard;
