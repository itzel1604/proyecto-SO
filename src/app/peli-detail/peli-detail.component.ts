import { Component, Input, OnInit } from '@angular/core';
import { Peli } from '../models/peli';
import { PeliService } from '../services/peli.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-peli-detail',
  templateUrl: './peli-detail.component.html',
  styleUrls: ['./peli-detail.component.css']
})
export class PeliDetailComponent implements OnInit {

  currentPeli = {
    img: '',
    sinopsis: '',
    name: '',
    id: ''
  };
  message = '';
  submitted = false;

  constructor(
    private peliService: PeliService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getPeli(this.route.snapshot.paramMap.get('id'));
  }

  getPeli(id:any) {
    this.peliService.get(id)
      .subscribe(
        data => {
          console.log(data, id);
        },
        error => {
          console.log(error);
        });
  }

  updatePeli() {
    this.peliService.editPeli(this.currentPeli.id, this.currentPeli)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'La pelicula se actualizo correctamente!';
        },
        error => {
          console.log(error);
        });
  }



  // newPeli(): void {
  //   window.location.reload();
  // }


}


