type Genre = action;

type Movie = {
  poster_path: string | undefined;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

type MoviesResponse = {
  myQuery: {
    page: number;
    results: Movie[];
    dates: {
      maximum: string;
      minimum: string;
    };
    total_pages: number;
    total_results: number;
  };
};

type PopularResponse = {
  getPopular: {
    page: number;
    results: Movie[];
    dates: {
      maximum: string;
      minimum: string;
    };
    total_pages: number;
    total_results: number;
  };
};
