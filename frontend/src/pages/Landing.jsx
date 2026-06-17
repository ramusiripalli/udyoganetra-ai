import Footer from "../components/common/Footer";
import CallToAction from "../components/LandingPage/CallToAction";
import FeaturesSection from "../components/LandingPage/FeaturesSection";
import HeroSection from "../components/LandingPage/HeroSection";
import HowItWorks from "../components/LandingPage/HowItWorks";
import ShowcaseSection from "../components/LandingPage/ShowcaseSection";
import WhyUdyogaNetra from "../components/LandingPage/WhyUdyogaNetra";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300
      overflow-hidden">

    
       <HeroSection />
       <WhyUdyogaNetra />
       <FeaturesSection />
       <HowItWorks/>
       <ShowcaseSection/>
       <CallToAction/>
       <Footer/>

    </div>
  );
};

export default Landing;