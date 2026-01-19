import styled from 'styled-components';
import { useState } from "react";
import { HelpCircle, Package, CreditCard, Zap, ChevronDown } from "lucide-react";

const faqCategories = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    faqs: [
      {
        question: "¿Cómo funciona la publicación gratuita?",
        answer: "Puedes publicar propiedades sin costo. Cada propiedad activa consume leads de tu bolsa gratuita cuando recibes contactos. Tus anuncios permanecen publicados y editables incluso cuando están pausados.",
      },
      {
        question: "¿Qué es un lead único?",
        answer: "Un lead único es un contacto verificado que cuenta una sola vez, sin importar cuántos canales use para contactarte (correo, WhatsApp, teléfono). Esto te protege de consumir múltiples leads por el mismo interesado.",
      },
      {
        question: "¿Puedo seguir publicando y editando durante la pausa?",
        answer: "¡Sí! Durante la pausa puedes seguir publicando nuevas propiedades y editando las existentes. Simplemente no estarán visibles en búsquedas hasta que tu bolsa se recargue o actives un plan premium.",
      },
      {
        question: "¿Cuántas propiedades puedo publicar?",
        answer: "No hay límite en la cantidad de propiedades que puedes publicar. La limitación está en la visibilidad: la bolsa gratuita tiene leads limitados, mientras que los planes premium ofrecen visibilidad ilimitada.",
      },
    ],
  },
  {
    id: "bolsa",
    label: "Plan gratuito",
    icon: Package,
    faqs: [
      {
        question: "¿Qué pasa si se agota mi bolsa de leads?",
        answer: "Cuando tu bolsa se agota, tus propiedades entran en pausa de 30 días. No aparecerán en búsquedas pero seguirán siendo editables. Después de 30 días, tu bolsa se recarga automáticamente.",
      },
      {
        question: "¿Los leads que no uso desaparecen?",
        answer: "No, los leads de tu bolsa no tienen fecha de expiración dentro del ciclo activo. Solo se consumen cuando recibes contactos reales. Al terminar el ciclo y entrar en pausa, el contador se reinicia.",
      },
      {
        question: "¿Cómo recupero visibilidad antes de la recarga?",
        answer: "Puedes activar un plan Premium en cualquier momento para recuperar visibilidad inmediata con leads ilimitados y sin pausas de 30 días.",
      },
      {
        question: "¿Cómo se consume mi bolsa de leads?",
        answer: "Cada vez que un usuario interesado te contacta a través de tus propiedades activas, se descuenta un lead de tu bolsa. Los contactos duplicados (mismo usuario, diferentes canales) cuentan como uno solo.",
      },
    ],
  },
  {
    id: "premium",
    label: "Planes Premium",
    icon: Zap,
    faqs: [
      {
        question: "¿Qué incluye el Plan Pro?",
        answer: "Plan Pro incluye: anuncios siempre visibles sin pausas, leads por correo y WhatsApp ilimitados, y visibilidad continua 24/7 en el portal.",
      },
      {
        question: "¿Qué son los Destacados?",
        answer: "Los Destacados son posiciones premium que colocan tus anuncios por encima de los simples en los resultados de búsqueda. Incluyen un badge distintivo que genera mayor confianza y más clics.",
      },
      {
        question: "¿Qué diferencia hay entre Destacado y Prime?",
        answer: "Destacado aparece en segunda posición con badge distintivo. Prime es la máxima visibilidad: primera posición, diseño más llamativo y prioridad absoluta en resultados.",
      },
    ],
  },
  {
    id: "pagos",
    label: "Pagos",
    icon: CreditCard,
    faqs: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos tarjeta de crédito, débito, transferencia bancaria y PayPal. También ofrecemos opciones de pago en mensualidades para planes de 3 y 6 meses.",
      },
      {
        question: "¿Puedo cancelar mi plan en cualquier momento?",
        answer: "Sí, puedes cancelar cuando quieras. Tu plan seguirá activo hasta el final del período pagado y no se realizarán cobros adicionales.",
      },
      {
        question: "¿Hay reembolsos?",
        answer: "Ofrecemos reembolso proporcional dentro de los primeros 7 días si no estás satisfecho con el servicio. Después de este período, puedes cancelar pero el plan seguirá activo hasta su vencimiento.",
      },
    ],
  },
];

const SectionWrapper = styled.section`
  padding: 3rem 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

const Highlight = styled.span`
  color: #059669;
`;

const Subtitle = styled.p`
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
  font-size: 0.875rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const CategoryTab = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$active ? '#059669' : '#f3f4f6'};
  color: ${props => props.$active ? 'white' : '#4b5563'};
  box-shadow: ${props => props.$active ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background: ${props => props.$active ? '#059669' : '#e5e7eb'};
  }
`;

const AccordionWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AccordionItem = styled.div<{ $isOpen: boolean }>`
  background: ${props => props.$isOpen ? '#ecfdf5' : '#f9fafb'};
  border: 1px solid ${props => props.$isOpen ? '#a7f3d0' : '#f3f4f6'};
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.2s ease;
`;

const AccordionTrigger = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.$isOpen ? '#047857' : '#111827'};
  transition: color 0.2s ease;

  &:hover {
    color: #047857;
  }
`;

const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const AccordionContentInner = styled.div`
  padding: 0 1.25rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.6;
`;

const HelpNote = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.75rem;
  margin-top: 2rem;
  
  a {
    color: #059669;
    font-weight: 500;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItem, setOpenItem] = useState<number | null>(null);
  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <SectionWrapper>
      <Container>
        <Header>
          <Title>
            Preguntas <Highlight>frecuentes</Highlight>
          </Title>
          <Subtitle>
            Resolvemos tus dudas sobre el modelo de publicación y los planes
          </Subtitle>
        </Header>

        <CategoryTabs>
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <CategoryTab
                key={category.id}
                $active={activeCategory === category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenItem(null);
                }}
              >
                <Icon size={16} />
                {category.label}
              </CategoryTab>
            );
          })}
        </CategoryTabs>

        <AccordionWrapper>
          {currentCategory?.faqs.map((faq, index) => (
            <AccordionItem key={index} $isOpen={openItem === index}>
              <AccordionTrigger 
                $isOpen={openItem === index}
                onClick={() => toggleItem(index)}
              >
                {faq.question}
                <ChevronIcon $isOpen={openItem === index}>
                  <ChevronDown size={16} />
                </ChevronIcon>
              </AccordionTrigger>
              <AccordionContent $isOpen={openItem === index}>
                <AccordionContentInner>
                  {faq.answer}
                </AccordionContentInner>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionWrapper>

        <HelpNote>
          ¿No encuentras tu respuesta?{" "}
          <a href="#">Contáctanos por WhatsApp</a>
        </HelpNote>
      </Container>
    </SectionWrapper>
  );
};

export default FAQSection;
