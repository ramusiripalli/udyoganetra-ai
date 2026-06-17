import HeroSection from "../components/LandingPage/HeroSection";
import WhyUdyogaNetra from "../components/LandingPage/WhyUdyogaNetra";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300
      overflow-hidden">

    
       <HeroSection />
       <WhyUdyogaNetra />

    </div>
  );
};

export default Landing;