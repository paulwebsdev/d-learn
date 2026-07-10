import Stats from "../../components/homepage/Stats";
import Hero from "../../components/homepage/Hero";
import Programs from "../../components/homepage/Programs";
import Features from "../../components/homepage/Features";
import HowItWorks from "../../components/homepage/HowItWorks";
import Testimonials from "../../components/homepage/Testimonials";
import FAQ from "../../components/homepage/FAQ";
import CTA from "../../components/homepage/CTA";
import TrustedBy from "../../components/homepage/TrustedBy";

function Home() {
  return (
    <>
  <Hero />
<TrustedBy />
<Stats />
<Programs />
<Features />
<HowItWorks />
<Testimonials />
<FAQ />
<CTA />
</>
  );
}

export default Home;