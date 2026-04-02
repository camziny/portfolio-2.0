import IntroHeader from "./components/IntroHeader";
import TerminalSection from "./components/TerminalSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-4 sm:pb-6">
        <IntroHeader />
        <TerminalSection />
      </div>

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}
