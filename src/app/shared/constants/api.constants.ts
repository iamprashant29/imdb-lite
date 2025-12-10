export class ApiConstants {
  static BASE_URL = 'https://imdb236.p.rapidapi.com/api/imdb';

  static API_HEADERS = {
    'X-Rapidapi-Key': '0f430d6ba2msh2c463ee77197257p1bd146jsn5c4fad41c3b6',
  }

  static constants  = {
    IMDB_TOP_250_MOVIES: `${ApiConstants.BASE_URL}/top250-movies`,
    IMDB_TOP_250_TV_SHOWS: `${ApiConstants.BASE_URL}/top250-tv`
  };
}
