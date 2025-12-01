function InspoCardSmall({ inspo }) {
  return (
    <div className="group relative w-full shrink-0 overflow-clip transition-all duration-800 hover:flex-2 md:flex-1">
      <img
        src={inspo.image}
        alt={inspo.text}
        className="h-80 w-full object-cover"
      />

      <p className="absolute inset-0 flex items-center justify-center bg-black text-center text-2xl font-bold text-white opacity-50 transition-opacity duration-300">
        {inspo.text}
      </p>
    </div>
  );
}

export default InspoCardSmall;
