import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IMovieProps {
  source: string;
}

export const Container = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border-radius: 1rem;
  overflow: hidden;
  h3 {
    font-size: 1rem;
    text-align: center;
    margin: 1rem 0;
  }
`;

export const ImageCover = styled.div<IMovieProps>`
  background-image: url(${(props) => props.source});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100%;
  height: 40vh;
`;
