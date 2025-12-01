import Heading from "../components/Heading";
import SectionContainer from "../components/SectionContainer";
import StoriesCards from "../components/StoriesCards";

function Stories({ viewPort }) {
  return (
    <SectionContainer name="stories">
      <Heading
        title="The Glow Stories"
        sub="Discover how The Glow inspires confidence and connection through every product."
      >
        <p className="text-brand">Real People, Real Care</p>
      </Heading>
      <StoriesCards viewPort={viewPort} />
    </SectionContainer>
  );
}

export default Stories;
