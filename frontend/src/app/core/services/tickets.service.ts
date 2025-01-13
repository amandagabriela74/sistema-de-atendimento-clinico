import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private http = inject(HttpClient);
  private url: string = environment.URL + '';

  Get(): Observable<any> {
    return this.http.get<any>(this.url + 'tickets');
  }

  Post(request: any): Observable<any> {
    return this.http.post<any>(this.url + 'tickets', request);
  }
}
