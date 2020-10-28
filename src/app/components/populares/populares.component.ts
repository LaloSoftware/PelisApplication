import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {
  taquilla = [];
  peliculas = [];
  constructor( private _peliculas: PeliculasService ) {
    this._peliculas.getTendencias().subscribe(
      res => this.taquilla = res.results,
      err => console.log(err)
    );
    this._peliculas.getPopulares().subscribe(
      res => this.peliculas = res.results,
      err => console.log(err)
    );
   }

  ngOnInit(): void {
    
  }

}
