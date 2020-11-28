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

  create(data: Peli): Observable<any> {
    return this.http.post(environment.URLAPI, data);
  }

  async deletePeli(id: string) {
    let urlAPI =
      environment.URLAPI + '/' + id;
    const data: any = await this.http.delete(urlAPI).toPromise();
    return data;
  }


}
