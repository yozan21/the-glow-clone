import CTA from "../components/CTA";
import GlassContainer from "../components/GlassContainer";

// https://i.pravatar.cc/150?img=3
function Hero({ viewPort }) {
  return (
    <section
      id="home"
      className="mb-9 flex aspect-video h-125 flex-col justify-end bg-[url(./hero.png)] bg-cover bg-top bg-no-repeat px-6 text-white md:mb-12 md:h-full md:w-full md:items-start md:justify-end md:bg-contain md:bg-center md:px-8 md:pb-6"
    >
      <div className="flex flex-col justify-end gap-6 md:w-100 md:gap-0.5">
        <h3 className="text-sm font-medium uppercase md:text-[11px]">
          #1 in custom skin treatments
        </h3>
        <h1 className="font-cormorant text-4xl font-semibold italic md:text-5xl">
          Curating a Culture of Care
        </h1>
        <p className="text-lg md:text-[13px]">
          Empowering a lifestyle of balance, confidence, and care with globally
          curated skincare designed to help you feel as good as you look.
        </p>
      </div>

      <div className="mt-5 mb-12 flex w-full items-end justify-between md:mt-0">
        <CTA />
        {viewPort > 500 && (
          <GlassContainer pad="px-3 py-1">
            {[1, 2, 3].map((el) => (
              <img
                className={`-ml-1.5 h-6 rounded-full`}
                src={`https://i.pravatar.cc/150?u=${el * 2}`}
                alt={`avatar-image-${el * 2}`}
              />
            ))}
            <span className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-4xl border border-s-0 border-e-0 border-t-white border-b-white text-[11px] backdrop-blur-[80px]">
              1K+
            </span>
            <p className="ml-1.5 text-[11px] tracking-wide uppercase">
              Happy Clients
            </p>
          </GlassContainer>
        )}
      </div>
    </section>
  );
}

export default Hero;
