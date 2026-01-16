import styled from 'styled-components';
import { Building2 } from "lucide-react";

const FooterWrapper = styled.footer`
  background: #111827;
  color: #9ca3af;
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;

const LogoText = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: 0.875rem;
`;

const NavLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #34d399;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    
    &::after {
      width: 100%;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <Logo>
            <Building2 size={24} color="#34d399" />
            <LogoText>propiedades.com</LogoText>
          </Logo>

          <Nav>
            <NavLink href="#">Términos y Condiciones</NavLink>
            <NavLink href="#">Política de Privacidad</NavLink>
            <NavLink href="#">Contacto</NavLink>
          </Nav>

          <Copyright>
            © {new Date().getFullYear()} propiedades.com. Todos los derechos reservados.
          </Copyright>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
