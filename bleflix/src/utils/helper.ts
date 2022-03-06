export const itemFormat = ({ path, format = "original" }: { path: string; format?: string }) =>
  `https://image.tmdb.org/t/p/${format}/${path}`;
