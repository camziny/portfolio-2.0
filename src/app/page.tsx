import IntroHeader from "./components/IntroHeader";
import TerminalSection from "./components/TerminalSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col items-center px-3 sm:px-4 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <IntroHeader />
        <TerminalSection />
      </div>

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}
