import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../shared/base.service';
import { ApiConstants } from '../shared/constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class MoviesService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Gets IMDB Top 250 movies list
   * @returns Observable<any>
   **/
  getImdbTopMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_TOP_250_MOVIES}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets IMDB Most Popular movies list
   * @returns Observable<any>
   **/
  getImdbMostPopularMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_MOST_POPULAR_MOVIES}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets US Top Box Office movies list
   * @returns Observable<any>
   **/
  getUSTopBoxOfficeMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_TOP_BOX_OFFICE_US}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets IMDB Top Bollywood movies list
   * @returns Observable<any>
   **/
  getImdbTopBollywoodMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_TOP_BOLLYWOOD_MOVIES}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets IMDB Top Tamil movies list
   * @returns Observable<any>
   **/
  getImdbTopTamilMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_TOP_TAMIL_MOVIES}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets IMDB Top Telugu movies list
   * @returns Observable<any>
   **/
  getImdbTeluguMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_TOP_TELUGU_MOVIES}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets IMDB Top Malayalam movies list
   * @returns Observable<any>
   **/
  getImdbMalayalamMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_TOP_MALAYALAM_MOVIES}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets Upcoming Indian movies list
   * @returns Observable<any>
   **/
  getUpcomingIndianMovies(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_UPCOMING_BOLLYWOOD_MOVIES}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets IMDB Top 250 TV Shows list
   * @returns Observable<any>
   **/
  getImdbTopTvShows(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_TOP_250_TV_SHOWS}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }

  /**
   * Gets IMDB Most Popular TV Shows list
   * @returns Observable<any>
   **/
  getImdbPopularTvShows(): Observable<any> {
    const apiUrl = `${ApiConstants.constants.IMDB_MOST_POPULAR_TV_SHOWS}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }
}
