import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Peli } from '../models/peli';
import { PeliService } from '../services/peli.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peticion: any;
  peliculas: Peli[] = [];

  constructor(
    private http: HttpClient,
    private peliService: PeliService
    ) { }

  ngOnInit(): void {
    this.catalogos();
    this.catalogo();
  }


  catalogo(): void{
    const urlApi = 'https://6h3v78tvk2.execute-api.us-east-2.amazonaws.com/dev';
    this.http.get(urlApi).subscribe((data: any) => {
      this.peliculas = data.body.Items;
      console.log(this.peliculas);
    });
  }

  async catalogos(){
    const urlAPI = 'https://6h3v78tvk2.execute-api.us-east-2.amazonaws.com/dev';
    const data: any = await this.http.get(urlAPI).toPromise();
    // console.log(data.body);
    return data;
  }

  deletePeli(id: string) {
    this.peliService.deletePeli(id)
      .then((data) => {
        alert('Pelicula eliminada con éxito');
        window.location.reload();
      });
  }

}
