import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Story from "@/components/Story";
import Begleitung from "@/components/Begleitung";
import Abgrenzung from "@/components/Abgrenzung";
import Ablauf from "@/components/Ablauf";
import Akademie from "@/components/Akademie";
import ClosingCta from "@/components/ClosingCta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Story />
      <Begleitung />
      <Abgrenzung />
      <Ablauf />
      <Akademie />
      <ClosingCta />
      <ContactForm />
      <Footer />
    </main>
  );
}
