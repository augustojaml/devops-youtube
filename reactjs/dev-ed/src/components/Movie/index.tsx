import { MotionProps } from 'framer-motion';
import { Container, ImageCover } from './styled';

export interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  genre_ids: number[];
}

export interface IMovieProps extends MotionProps {
  movie: IMovie;
}

export function Movie({ movie, ...rest }: IMovieProps) {
  return (
    <>
      <Container {...rest}>
        <ImageCover source={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></ImageCover>
        <h3>{movie.title}</h3>
      </Container>
    </>
  );
}
