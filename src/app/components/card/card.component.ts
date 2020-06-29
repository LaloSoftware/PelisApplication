import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() peli: any = {};
  imagen: string;
  constructor() {

    
  }

  ngOnInit(): void {
    this.imagen = `https://image.tmdb.org/t/p/original${this.peli.poster_path}`;
  }

}
