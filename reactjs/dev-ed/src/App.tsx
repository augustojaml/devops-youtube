import { useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { IMovie, Movie } from './components/Movie';
import { AppGrid, GlobalContainer, GlobalStyle } from './global/global';

function App() {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [category, setCategory] = useState(0);

  async function fetchMovies(): Promise<IMovie[]> {
    const fetchPopularMovies = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1`
    );
    const data = await fetchPopularMovies.json();
    return data.results;
  }

  function handleGetCategory(value: number) {
    setCategory(value);
  }

  useEffect(() => {
    (async () => {
      const movies: IMovie[] = await fetchMovies();

      if (category === 0) {
        setPopularMovies(movies);
        return;
      }
      setPopularMovies(movies.filter((movie) => movie.genre_ids.includes(category)));
    })();
  }, [category]);

  return (
    <>
      <GlobalContainer>
        <Filter categoryValue={category} getCategory={handleGetCategory} />
        <AppGrid layout>
          {popularMovies.map((movie: IMovie) => (
            <Movie layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={movie.id} movie={movie} />
          ))}
        </AppGrid>
      </GlobalContainer>
      <GlobalStyle />
    </>
  );
}

export default App;
