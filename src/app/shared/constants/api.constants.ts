export class ApiConstants {
  static BASE_URL = 'https://imdb236.p.rapidapi.com/api/imdb';

  static API_HEADERS = {
    'X-Rapidapi-Key': '0f430d6ba2msh2c463ee77197257p1bd146jsn5c4fad41c3b6',
  }

  static constants  = {
    IMDB_TOP_250_MOVIES: `${ApiConstants.BASE_URL}/top250-movies`,
    IMDB_MOST_POPULAR_MOVIES: `${ApiConstants.BASE_URL}/most-popular-movies`,
    IMDB_TOP_BOX_OFFICE_US: `${ApiConstants.BASE_URL}/top-box-office`,
    IMDB_TOP_BOLLYWOOD_MOVIES: `${ApiConstants.BASE_URL}/india/top-rated-indian-movies`,
    IMDB_UPCOMING_BOLLYWOOD_MOVIES: `${ApiConstants.BASE_URL}/india/upcoming`,
    IMDB_TOP_TAMIL_MOVIES: `${ApiConstants.BASE_URL}/india/top-rated-tamil-movies`,
    IMDB_TOP_TELUGU_MOVIES: `${ApiConstants.BASE_URL}/india/top-rated-telugu-movies`,
    IMDB_TOP_MALAYALAM_MOVIES: `${ApiConstants.BASE_URL}/india/top-rated-malayalam-movies`,
    IMDB_TOP_250_TV_SHOWS: `${ApiConstants.BASE_URL}/top250-tv`,
    IMDB_MOST_POPULAR_TV_SHOWS: `${ApiConstants.BASE_URL}/most-popular-tv`,
  };
}
