import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private apiService: ApiService,
    private mockDataService: MockDataService
  ) {}

  getData(endpoint: string): Observable<any> {
    if (environment.useMockData) {
      return this.mockDataService.getData(endpoint);
    } else {
      return this.apiService.getData(endpoint);
    }
  }
}
