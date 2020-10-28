import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() peli: any = {};
  imagen: string;
  constructor(private activateRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.imagen = `https://image.tmdb.org/t/p/original${this.peli.poster_path}`;
  }

  verMasDePelicula(id: number){
    const path = this.activateRoute.url['_value'][0]['path']
    console.log(path);
    this.router.navigateByUrl(`/peliculas/${id}/${path}`)
  }

}
