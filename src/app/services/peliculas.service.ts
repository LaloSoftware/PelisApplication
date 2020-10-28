import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http: HttpClient ) { }
  
  queryJsonP(query: string) {
    const urlMovieDb = `${this.urlMoviedb}/${query}api_key=${environment.apikey}&language=es&callback=JSONP_CALLBACK`;
    //const headers = 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliMjFkOTJmNjJkZDYwZTQxNzU3Yzc0ZDAzZDcyOCIsInN1YiI6IjVlNmJmYmM0MzU3YzAwMDAxMTQwYWVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZxnGubGV4gRNjR6wB-hwoSHyz75GnkjmIMUi8jsJFlE';
    return this.http.jsonp(urlMovieDb, "");
  }

  getPopulares(): any{
    let url = `discover/movie?sort_by=popularity.desc&`;
    return this.queryJsonP(url);
  }

  getTendencias(): any{
    //Petición a la API
    let url = `trending/movie/week?`;
    return this.queryJsonP(url);
  }

  buscarPelicula( texto:string ): any{
    //&page=1&include_adult=false
    let url = `${this.urlMoviedb}/search/movie?api_key=${environment.apikey}&language=en-US&&query=${ texto }&page=1&include_adult=true`;
    return this.http.get(url)
  }

  obtenerPelicula(id:number){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${environment.apikey}&languaje=en-US`
    return this.http.get(url);
  }
}
