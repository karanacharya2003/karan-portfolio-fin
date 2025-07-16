
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import SocialLinksSection from './components/SocialLinksSection';
import TechExpertiseSection from './components/TechExpertiseSection';




function App() {


  return (
    <div>
      {/* Updated to use gradient-light-main for light mode and gradient-dark-main for dark mode */}
      <div className="relative min-h-screen bg-gradient-light-main dark:bg-gradient-dark-main overflow-x-hidden transition-colors duration-300">
        {/* Navigation */}
        

        {/* Main Content */}
        <main className="relative">
          <HeroSection />
          <AboutSection />
             <ResumeSection />
          <TechExpertiseSection/>
 
       
       
          <SocialLinksSection />
      
        </main>
      </div>
    </div>
  );
}

export default App;
