import { Component, OnInit } from '@angular/core';
import { Peli } from '../models/peli';
import { PeliService } from '../services/peli.service';

@Component({
  selector: 'app-add-peli',
  templateUrl: './add-peli.component.html',
  styleUrls: ['./add-peli.component.css']
})
export class AddPeliComponent implements OnInit {


  peli = {
    img: '',
    sinopsis: '',
    name: '',
    id: ''
  };

  submitted = false;

  constructor(
    private peliService: PeliService
  ) { }

  ngOnInit(): void {
  }

  savePeli(): void {
    const data = {
      img: this.peli.img,
      sinopsis: this.peli.sinopsis,
      name: this.peli.name,
      id: this.peli.id
    };

    this.peliService.create(data)
      .subscribe(
        response => {
          console.log(response, this.submitted);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPeli(): void {
    window.location.reload();
  }


}
