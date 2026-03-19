import HeroSection from "@/components/zynthic/HeroSection";
import AboutSection from "@/components/zynthic/AboutSection";
import SkillUpSection from "@/components/zynthic/SkillUpSection";
import HackathonFlow from "@/components/zynthic/HackathonFlow";
import PrizesSection from "@/components/zynthic/PrizesSection";
import EventDetails from "@/components/zynthic/EventDetails";
import DownloadSection from "@/components/zynthic/DownloadSection";
import CTASection from "@/components/zynthic/CTASection";
import ContactSection from "@/components/zynthic/ContactSection";
import FloatingRegister from "@/components/zynthic/FloatingRegister";
import Footer from "@/components/zynthic/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />
    <AboutSection />
    <SkillUpSection />
    <HackathonFlow />
    <PrizesSection />
    <EventDetails />
    <DownloadSection />
    <CTASection />
    <ContactSection />
    <Footer />
    <FloatingRegister />
  </main>
);

export default Index;
