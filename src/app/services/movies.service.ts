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
}
