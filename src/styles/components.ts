import styled from 'styled-components';

// Container
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Section
export const Section = styled.section<{ $bg?: string; $py?: string }>`
  padding: ${props => props.$py || '3rem'} 0;
  background: ${props => props.$bg || 'transparent'};
`;

// Flex utilities
export const Flex = styled.div<{
  $direction?: string;
  $align?: string;
  $justify?: string;
  $gap?: string;
  $wrap?: string;
}>`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
`;

// Grid
export const Grid = styled.div<{ $cols?: string; $gap?: string }>`
  display: grid;
  grid-template-columns: ${props => props.$cols || '1fr'};
  gap: ${props => props.$gap || '1rem'};
`;

// Text components
export const Heading1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #111827;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const Heading3 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
`;

export const Text = styled.p<{ $size?: string; $color?: string; $align?: string }>`
  font-size: ${props => props.$size || '1rem'};
  color: ${props => props.$color || '#4b5563'};
  text-align: ${props => props.$align || 'left'};
`;

export const SmallText = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

// Highlight text
export const Highlight = styled.span<{ $color?: string }>`
  color: ${props => props.$color || '#059669'};
`;

// Button
export const Button = styled.button<{ 
  $variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  $size?: 'sm' | 'md' | 'lg';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  
  ${props => {
    switch (props.$size) {
      case 'sm':
        return 'padding: 0.5rem 1rem; font-size: 0.875rem;';
      case 'lg':
        return 'padding: 0.875rem 1.5rem; font-size: 1rem;';
      default:
        return 'padding: 0.625rem 1.25rem; font-size: 0.875rem;';
    }
  }}
  
  ${props => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background: #f3f4f6;
          color: #374151;
          &:hover { background: #e5e7eb; }
        `;
      case 'outline':
        return `
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          &:hover { background: rgba(255, 255, 255, 0.1); }
        `;
      case 'gradient':
        return `
          background: linear-gradient(to right, #fbbf24, #f59e0b);
          color: #064e3b;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
          &:hover { 
            background: linear-gradient(to right, #f59e0b, #d97706);
            box-shadow: 0 4px 20px rgba(245, 158, 11, 0.5);
          }
        `;
      default:
        return `
          background: #10b981;
          color: white;
          &:hover { background: #059669; }
        `;
    }
  }}
`;

export const ButtonLink = styled.a<{ 
  $variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'white';
  $size?: 'sm' | 'md' | 'lg';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  
  ${props => {
    switch (props.$size) {
      case 'sm':
        return 'padding: 0.5rem 1rem; font-size: 0.875rem;';
      case 'lg':
        return 'padding: 0.875rem 1.5rem; font-size: 1rem;';
      default:
        return 'padding: 0.625rem 1.25rem; font-size: 0.875rem;';
    }
  }}
  
  ${props => {
    switch (props.$variant) {
      case 'white':
        return `
          background: white;
          color: #047857;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          &:hover { 
            background: #f3f4f6;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          }
        `;
      case 'secondary':
        return `
          background: #f3f4f6;
          color: #374151;
          &:hover { background: #e5e7eb; }
        `;
      case 'outline':
        return `
          background: rgba(5, 150, 105, 0.3);
          border: 1px solid rgba(52, 211, 153, 0.5);
          color: white;
          &:hover { background: rgba(5, 150, 105, 0.4); }
        `;
      case 'gradient':
        return `
          background: linear-gradient(to right, #fbbf24, #f59e0b);
          color: #064e3b;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
          &:hover { 
            background: linear-gradient(to right, #f59e0b, #d97706);
            box-shadow: 0 4px 20px rgba(245, 158, 11, 0.5);
          }
        `;
      default:
        return `
          background: #10b981;
          color: white;
          &:hover { background: #059669; }
        `;
    }
  }}
`;

// Card
export const Card = styled.div<{ $padding?: string; $shadow?: boolean }>`
  background: white;
  border-radius: 0.75rem;
  padding: ${props => props.$padding || '1rem'};
  border: 1px solid #e5e7eb;
  ${props => props.$shadow && 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'}
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

// Icon wrapper
export const IconWrapper = styled.div<{ $bg?: string; $size?: string }>`
  width: ${props => props.$size || '3rem'};
  height: ${props => props.$size || '3rem'};
  background: ${props => props.$bg || '#ecfdf5'};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Badge
export const Badge = styled.span<{ $bg?: string; $color?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.$bg || '#ecfdf5'};
  color: ${props => props.$color || '#047857'};
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;
