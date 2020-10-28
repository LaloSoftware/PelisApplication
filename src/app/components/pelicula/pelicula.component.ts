import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula_id: number;
  path: string = "";
  pelicula: any;

  constructor(private _peliculasS: PeliculasService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.params.subscribe(
      parametros => {
        this.pelicula_id = parametros['id'];
        this.path = parametros['pag']
        console.log(parametros);
      }
    );
  }

  ngOnInit(): void {
    this._peliculasS.obtenerPelicula(this.pelicula_id).subscribe(
      data => {
        console.log(data);
        this.pelicula = data;
      }
    );
  }

  regresar(){
    this.router.navigateByUrl(`/${this.path}`);
  }

}
