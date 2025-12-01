import Heading from "../components/Heading";
import InspoCard from "../components/InspoCard";
import InspoCardSmall from "../components/InspoCardSmall";
import SectionContainer from "../components/SectionContainer";

const inspos = [
  {
    id: 1,
    image: "./inspo-1.png",
    text: "A Journey To Gentle Luxury",
  },
  {
    id: 2,
    image: "./inspo-2.png",
    text: "Mindful Moments, Meaningful Care",
  },
  {
    id: 3,
    image: "./inspo-3.png",
    text: "Where Wellness Feels Like Home",
  },
];

function Inspiration({ viewPort }) {
  return (
    <SectionContainer name="inspo">
      <Heading
        title="Where Self-Care Becomes a Ritual"
        sub="More than skincare - a lifestyle of self-investment and inspiration"
      />
      <div className="-px-8 -mx-8 flex h-80 flex-nowrap gap-1.5 overflow-x-auto">
        {inspos.map((inspo) =>
          viewPort > 500 ? (
            <InspoCard inspo={inspo} key={inspo.id} />
          ) : (
            <InspoCardSmall inspo={inspo} key={inspo.id} />
          ),
        )}
      </div>
    </SectionContainer>
  );
}

export default Inspiration;
