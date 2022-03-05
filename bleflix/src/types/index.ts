export type movie = {
  adult: boolean;
  backdrop_path: string;
  // genre_ids: Array
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface IMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: movie[];
  total_pages: number;
  total_results: number;
}