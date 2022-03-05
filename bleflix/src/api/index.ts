const API_KEY = "98ea2a58a0856a9379548498d78a3761";
const BASE_URL = "https://api.themoviedb.org/3";

const ORIGINAL_IMAGE = "https://image.tmdb.org/t/p/original";

interface IMoviesFetcherProps {
  page?: number;
  language?: string;
}

export const moviesFetcher = ({ page = 1, language = "ko-KR" }: IMoviesFetcherProps): Promise<any> =>
  fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${language}&page=${page}`).then(res => res.json());
