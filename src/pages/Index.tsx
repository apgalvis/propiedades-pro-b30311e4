import HeroSection from "@/components/landing/HeroSection";
import VisibilityCallout from "@/components/landing/VisibilityCallout";
import VisibilityLevels from "@/components/landing/VisibilityLevels";
import PremiumPlansSection from "@/components/landing/PremiumPlansSection";
import PremiumBenefits from "@/components/landing/PremiumBenefits";
import FAQSection from "@/components/landing/FAQSection";
import GlossarySection from "@/components/landing/GlossarySection";
import Footer from "@/components/landing/Footer";

// Configuración de URLs externas
const CART_URL = "https://propiedades.com/carrito";
const WHATSAPP_URL = "https://wa.me/5215512345678?text=Hola,%20quiero%20cotizar%20un%20plan%20Premium";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero: Si te ven más, te contactan más */}
      <HeroSection />
      
      {/* 2. ¿Cómo funciona la versión gratuita? */}
      <VisibilityCallout />
      
      {/* 3. Niveles de visualización */}
      <VisibilityLevels />
      
      {/* 4. Compara y elige tu nivel de visibilidad */}
      <PremiumPlansSection cartUrl={CART_URL} whatsappUrl={WHATSAPP_URL} />
      
      {/* 5. Desbloquea tu potencial */}
      <PremiumBenefits cartUrl={CART_URL} whatsappUrl={WHATSAPP_URL} />
      
      {/* 6. Preguntas frecuentes */}
      <FAQSection />
      
      {/* 7. Glosario de términos */}
      <GlossarySection />
      
      <Footer />
    </div>
  );
};

export default Index;
