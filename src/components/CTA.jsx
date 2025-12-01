import CTAButton from "./CTAButton";

function CTA() {
  return (
    <div className="flex gap-3">
      <CTAButton type="secondary">Help to find your Treatment</CTAButton>
      <CTAButton>Discover more &rarr;</CTAButton>
    </div>
  );
}

export default CTA;
