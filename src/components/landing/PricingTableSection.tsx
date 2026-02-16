import styled from 'styled-components';
import { Check, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PricingTableSectionProps {
  cartUrl: string;
  whatsappUrl: string;
}

const pricingTiers = [
  { properties: "1 – 10", leads: "3", price: "$499", costPerPub: "$50" },
  { properties: "11 – 40", leads: "3 a 5", price: "$1,749", costPerPub: "$44" },
  { properties: "41 – 80", leads: "5 a 7", price: "$2,599", costPerPub: "$32", highlighted: true },
  { properties: "81 – 140", leads: "7 a 10", price: "$4,299", costPerPub: "$31" },
];

const SectionWrapper = styled.section`
  padding: 3rem 0;
  background: linear-gradient(to bottom, #f0fdf4, #ecfdf5);
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.625rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.25;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Highlight = styled.span`
  color: #059669;
`;

const Subtitle = styled.p`
  color: #4b5563;
  max-width: 36rem;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const BoldText = styled.span`
  font-weight: 700;
  color: #111827;
`;

const TableWrapper = styled.div<{ $isVisible: boolean }>`
  max-width: 48rem;
  margin: 0 auto 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.7);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(10px)'};
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
  background: rgba(6, 95, 70, 0.85);
  backdrop-filter: blur(8px);
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr 0.8fr 1fr 0.8fr;
  }
`;

const TableHeadCell = styled.div`
  padding: 0.75rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 1.3;
  
  @media (min-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.8125rem;
  }
`;

const TableRow = styled.div<{ $highlighted?: boolean; $isLast?: boolean }>`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.2fr 1fr;
  border-bottom: ${props => props.$isLast ? 'none' : '1px solid rgba(229, 231, 235, 0.5)'};
  background: ${props => props.$highlighted ? 'rgba(236, 253, 245, 0.7)' : 'transparent'};
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr 0.8fr 1fr 0.8fr;
  }
  
  &:hover {
    background: ${props => props.$highlighted ? 'rgba(209, 250, 229, 0.6)' : 'rgba(249, 250, 251, 0.5)'};
  }
`;

const TableCell = styled.div<{ $bold?: boolean; $highlight?: boolean }>`
  padding: 0.625rem 0.75rem;
  font-size: 0.8125rem;
  color: ${(props) => props.$highlight ? '#047857' : '#374151'};
  font-weight: ${(props) => (props.$bold || props.$highlight) ? '700' : '400'};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  
  @media (min-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
`;

const SpecialRow = styled.div`
  display: grid;
  grid-template-columns: 3.2fr 1fr;
  border-top: 1px solid rgba(229, 231, 235, 0.5);
  background: rgba(249, 250, 251, 0.4);
  
  @media (max-width: 640px) {
    grid-template-columns: 2.8fr 0.8fr;
  }
`;

const SpecialCell = styled.div<{ $span?: boolean }>`
  padding: 0.625rem 0.75rem;
  font-size: 0.8125rem;
  color: #047857;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  
  @media (min-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const FooterNotes = styled.div`
  max-width: 48rem;
  margin: 0 auto 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterNote = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
`;

const CheckIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  min-width: 1.25rem;
  color: #059669;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  min-height: 48px;
  background: #047857;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 100px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(4, 120, 87, 0.25);
  transition: all 0.2s ease-out;

  &:hover {
    background: #065f46;
    box-shadow: 0 4px 16px rgba(4, 120, 87, 0.35);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  min-height: 48px;
  background: transparent;
  border: 1px solid #a7f3d0;
  color: #047857;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    background: #ecfdf5;
  }
`;

const PricingTableSection = ({ cartUrl, whatsappUrl }: PricingTableSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper ref={sectionRef}>
      <Container>
        <Header>
          <Title>
            <Highlight>Leads ilimitados</Highlight> + WhatsApp incluido
          </Title>
          <Subtitle>
            Mantén tu <BoldText>inventario activo</BoldText>. Sin interrupciones.
          </Subtitle>
        </Header>

        <TableWrapper $isVisible={isVisible}>
          <TableHead>
            <TableHeadCell>Cantidad Propiedades</TableHeadCell>
            <TableHeadCell>Leads en versión gratuita</TableHeadCell>
            <TableHeadCell>Precio mensual + IVA desde*</TableHeadCell>
            <TableHeadCell>Costo por publicación + IVA</TableHeadCell>
          </TableHead>

          {pricingTiers.map((tier, index) => (
            <TableRow
              key={index}
              $highlighted={tier.highlighted}
              $isLast={false}
            >
              <TableCell $bold={tier.highlighted}>{tier.properties}</TableCell>
              <TableCell>{tier.leads}</TableCell>
              <TableCell $highlight={tier.highlighted}>{tier.price}</TableCell>
              <TableCell $highlight={tier.highlighted}>{tier.costPerPub}</TableCell>
            </TableRow>
          ))}

          <SpecialRow>
            <SpecialCell>Más de 140 cotiza con tu ejecutivo</SpecialCell>
            <SpecialCell>—</SpecialCell>
          </SpecialRow>
        </TableWrapper>

        <FooterNotes>
          <FooterNote>
            <CheckIcon><Check size={16} /></CheckIcon>
            Recibe tus leads en WhatsApp sin costo adicional
          </FooterNote>
          <FooterNote>
            <CheckIcon><Check size={16} /></CheckIcon>
            Pregunta por las promociones en Avisos Destacados
          </FooterNote>
        </FooterNotes>

        <CTAWrapper>
          <PrimaryButton href={cartUrl} target="_blank" rel="noopener noreferrer">
            <ShoppingCart size={18} />
            Cambiar a Pro
          </PrimaryButton>
          <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contacta a un asesor
          </SecondaryButton>
        </CTAWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PricingTableSection;
