import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliService } from '../services/peli.service';
import { Peli } from '../models/peli';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peli-detail',
  templateUrl: './peli-detail.component.html',
  styleUrls: ['./peli-detail.component.css']
})
export class PeliDetailComponent implements OnInit {
  currentPeli = {
    img: '',
    sinopsis: '',
    id: '',
    name: ''
  };

  message = '';

  constructor(
    private peliService: PeliService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id: any): void {
    this.peliService.get(id)
      .subscribe(
        data => {
          this.currentPeli = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updatePeli(): void {
    this.peliService.update(parseInt(this.currentPeli.id), this.currentPeli)
      .subscribe(
        response => {
          console.log(response);
          this.openSnackBar();
        },
        error => {
          console.log(error);
        });
  }

  deletePeli(): void {
    this.peliService.delete(parseInt(this.currentPeli.id))
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/inicio']);
        },
        error => {
          console.log(error);
        });
  }

  openSnackBar(): void {
    this.snackBar.open('Registro atualizado', 'Vuelve al inicio', {
      duration: 4000,
      panelClass: 'notif-success',
    });
  }
}


