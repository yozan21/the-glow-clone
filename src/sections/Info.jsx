import Heading from "../components/Heading";
import InfoCard from "../components/InfoCard";
import SectionContainer from "../components/SectionContainer";

const infos = [
  {
    id: 1,
    image: "./info-1.png",
    title: "dry skin",
    description: "Deep moisture for radiant skin",
  },
  {
    id: 2,
    image: "./info-2.png",
    title: "sensitive skin",
    description: "Protection with luxury",
  },
  {
    id: 3,
    image: "./info-3.png",
    title: "oily skin",
    description: "Restore while you rest",
  },
  {
    id: 4,
    image: "./info-4.png",
    title: "normal skin",
    description: "Timeless beauty solution",
  },
];

function Info() {
  return (
    <SectionContainer name="info">
      <Heading
        title="For a Life That Glows Well"
        sub="Curated collections from the world's finest skincare brands"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
        {infos.map((info) => (
          <InfoCard info={info} key={info.id} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Info;
