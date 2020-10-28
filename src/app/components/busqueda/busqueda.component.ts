import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  busqueda: string = "";
  peliculas: any;

  constructor(private _peliculas: PeliculasService,
              private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['text']){
          this.busqueda = params['text'];
          this.buscar();
        }
      }
    );
  }

  ngOnInit(): void {
  }

  buscar(){
    if(this.busqueda != ""){
      this._peliculas.buscarPelicula(this.busqueda).subscribe(
        res => {
          this.peliculas = res["results"];
        }, err => {
          console.log(err);
        }
      );
    }
  }

}
