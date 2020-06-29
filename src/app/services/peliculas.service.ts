import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  //urlMoviedb = "https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>";
  private apikey:string = "2904d03249c596ace95305266ce73a1f";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http: HttpClient ) { }
  
  queryJsonP(query: string) {
    const urlMovieDb = `${this.urlMoviedb}/${query}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    //const headers = 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliMjFkOTJmNjJkZDYwZTQxNzU3Yzc0ZDAzZDcyOCIsInN1YiI6IjVlNmJmYmM0MzU3YzAwMDAxMTQwYWVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZxnGubGV4gRNjR6wB-hwoSHyz75GnkjmIMUi8jsJFlE';
    return this.http.jsonp(urlMovieDb, "");
  }

  getPopulares(): any{
    let url = `discover/movie?sort_by=popularity.desc`;
    return this.queryJsonP(url);
  }

  getCartelera(): any{
    //fecha de inicio
    let inicio = new Date();
    let fecha = `${inicio.getFullYear()}-${inicio.getMonth() + 1}-${inicio.getDate()}`;
    
    //fecha de fin
    let fin = new Date();
    fin.setDate(fin.getDate() + 7);
    let fecha2 = `${fin.getFullYear()}-${fin.getMonth() + 1}-${fin.getDate()}`;

    //Petición a la API
    let url = `discover/movie?primary_release_date.gte=${fecha}&primary_release_date.lte=${fecha2}`;
    return this.queryJsonP(url);
  }

  getPopularesNinos(): any{
    let url = `discover/movie?certification_country=MX&certification=lte&sort_by=popularity.desc`;
    return this.queryJsonP(url);
  }

  buscarPelicula( texto:string ): any{
    let url = `search/movie?query=${ texto }&sort_by=popularity.desc&include_adult=true`;
    return this.queryJsonP(url);
  }
}
