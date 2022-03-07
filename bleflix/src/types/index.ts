export enum ITEM_KINDS {
  MOVIE = "movie",
  TV = "tv",
}
export enum MOVIE_KINDS {
  POPULAR = "popular",
  NOW_PLAYING = "now_playing",
  UPCOMING = "upcoming",
  TOP_RATED = "top_rated",
}

export enum TV_KIND {
  POPULAR = "popular",
  ON_THE_AIR = "on_the_air",
  TOP_RATED = "top_rated",
  AIRING_TODAY = "airing_today",
}

export interface IItem {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  vote_average: number;

  // 영화 변수
  title: string;
  release_date: string;

  // TV 프로그램 변수
  name: string;
  first_air_date: string;

  // 검색관련 변수
  media_type: ITEM_KINDS;
}
export interface IItemsResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IItem[];
  total_pages: number;
  total_results: number;
}

export interface IDetailMovie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
}

export interface IDetailTv {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  first_air_date: string;
  last_air_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  episode_run_time: number[];
  tagline: string;
}

export interface ISearchItems {
  page: number;
  results: IItem[];
  total_pages: number;
  total_results: number;
}
