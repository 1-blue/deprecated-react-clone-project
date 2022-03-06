import { MOVIE_KINDS, TV_KIND } from "@src/types";

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

interface IMoviesFetcherProps {
  kinds: MOVIE_KINDS;
  page?: number;
  language?: string;
}
interface IMovieFetcherProps {
  movieId: string;
  language?: string;
}

// 영화들 정보 가져오기
export const moviesFetcher = ({ kinds, page = 1, language = "ko-KR" }: IMoviesFetcherProps): Promise<any> =>
  fetch(`${BASE_URL}/movie/${kinds}?api_key=${API_KEY}&language=${language}&page=${page}`).then(res => res.json());

// 특정 영화 정보 가져오기
export const movieFetcher = ({ movieId, language = "ko-KR" }: IMovieFetcherProps): Promise<any> =>
  fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`).then(res => res.json());

interface ITvsFetcherProps {
  kinds: TV_KIND;
  page?: number;
  language?: string;
}
interface ITvFetcherProps {
  tvId: string;
  language?: string;
}

// tv프로그램 정보 가져오기
export const tvsFetcher = ({ kinds, page = 1, language = "ko-KR" }: ITvsFetcherProps): Promise<any> =>
  fetch(`${BASE_URL}/tv/${kinds}?api_key=${API_KEY}&language=${language}&page=${page}`).then(res => res.json());

// 특정 tv프로그램 정보 가져오기
export const tvFetcher = ({ tvId, language = "ko-KR" }: ITvFetcherProps): Promise<any> =>
  fetch(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}&language=${language}`).then(res => res.json());
