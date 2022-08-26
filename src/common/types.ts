export type MovieType = {
  id: number;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
  release_date: number;
  runtime: number;
  genres: Array<{ id: number; name: string }>;
};
