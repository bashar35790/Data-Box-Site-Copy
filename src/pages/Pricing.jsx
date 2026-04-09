import Achivements from "../components/sections/Achivements/Achivements";
import Faq from "../components/sections/Faq/Faq";
import PricingHero from "../components/sections/PricingHero/PricingHero";
import Testimonials from "../components/sections/Testimonial/Testimonial";

export default function Pricing() {
  return (
    <>
      <PricingHero></PricingHero>
      <Achivements />
      <Testimonials heading={false} />
      <Faq />
    </>
  );
}
