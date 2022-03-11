import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;      
    }
    @media(max-width: 720px) {
      font-size: 87.5%;      
    }
  }

  body {
    background: #fbfbfc;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Montserrat', sans-serif;;
    font-weight: 600;
  }

  button {
    cursor: pointer;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
`;

export const GlobalContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const AppGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 2rem;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;
