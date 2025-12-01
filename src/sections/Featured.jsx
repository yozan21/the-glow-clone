import FeaturedCard from "../components/FeaturedCard";
import SectionContainer from "../components/SectionContainer";
const features = [
  {
    id: 1,
    image: "./featured-1.png",
    description: "Tone Brightening Capsule serum",
    price: 12,
  },
  {
    id: 2,
    image: "./featured-2.png",
    description: "Tone Brightening Capsule serum",
    price: 12,
  },
  {
    id: 3,
    image: "./featured-3.png",
    description: "Tone Brightening Capsule serum",
    price: 12,
  },
];

function Featured() {
  return (
    <SectionContainer name="featured">
      <div className="text-text mb-6 flex flex-col items-center gap-2 text-2xl font-medium md:flex-row">
        <p className="text-3xl capitalize md:text-2xl">Best Sellers</p>
        <span className="hidden text-sm md:inline-block">&bull;</span>
        <div className="flex md:w-3/4">
          <p className="relative mr-5">
            Skincare{" "}
            <span className="absolute -top-1.5 -right-2.5 text-sm font-normal tracking-tighter">
              12
            </span>
          </p>
          <p className="text-accent relative mr-5 font-normal">
            Hair{" "}
            <span className="absolute -top-1.5 -right-2.5 text-sm font-normal tracking-tighter">
              08
            </span>
          </p>
          <p className="text-accent relative mr-5 font-normal">
            Wellness{" "}
            <span className="absolute -top-1.5 -right-2.5 text-sm font-normal tracking-tighter">
              09
            </span>
          </p>
          <p className="text-accent grow justify-self-end text-right text-sm">
            All
          </p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <FeaturedCard feature={feature} key={feature.id} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Featured;
