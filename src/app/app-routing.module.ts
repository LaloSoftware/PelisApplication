import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularesComponent } from './components/populares/populares.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: 'home', component: PopularesComponent },
  { path: "peliculas/:id", component: PeliculaComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "info", component: AboutComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
