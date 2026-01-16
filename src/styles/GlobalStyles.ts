import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    background-color: #ffffff;
    color: #111827;
    line-height: 1.5;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scrollIndicator {
    0%, 100% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.5;
      transform: translateY(6px);
    }
  }

  @keyframes drawLine {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }
    100% {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  .animate-scroll-indicator {
    animation: scrollIndicator 2s ease-in-out infinite;
  }

  .animate-draw-line {
    animation: drawLine 1s ease-out forwards;
    animation-delay: 0.5s;
    transform: scaleX(0);
  }

  .animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;
