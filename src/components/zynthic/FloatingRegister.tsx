import { Rocket } from "lucide-react";

const FloatingRegister = () => (
  <a
    href="https://forms.gle/ah5iHKB5pS9nxQQd7"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center gold-glow animate-pulse-glow hover:scale-110 transition-transform"
    aria-label="Register Now"
  >
    <Rocket className="w-6 h-6" />
  </a>
);

export default FloatingRegister;
