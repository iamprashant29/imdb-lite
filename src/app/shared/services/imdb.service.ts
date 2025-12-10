import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { ApiConstants } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ImdbService extends BaseService {
  constructor() {
    super();
  }

  /**
   * Gets items details by ID
   * @returns Observable<any>
   **/
  getDetailsById(itemId: string): Observable<any> {
    const apiUrl = `${ApiConstants.BASE_URL}/${itemId}`;
    const requestOptions = {
      headers: ApiConstants.API_HEADERS
    };
    return this.httpClient?.get<any>(apiUrl, requestOptions);
  }
}
