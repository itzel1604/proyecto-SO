import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peli } from '../models/peli';


@Injectable({
  providedIn: 'root'
})
export class PeliService {

  constructor(
    private http: HttpClient
  ) { }

  get(id: number): Observable<any> {
    return this.http.get(`${environment.URLAPI}/${id}`);
  }

  create(data: Peli): Observable<any> {
    return this.http.post(environment.URLAPI, data);
  }

  update(id: number, data: Peli): Observable<any> {
    return this.http.put(`${environment.URLAPI}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.URLAPI}/${id}`);
  }


}
