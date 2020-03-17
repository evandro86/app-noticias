import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FontesComponent } from './fontes/fontes.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'titulos',
    component: TitulosComponent
    // loadChildren: './titulos/titulos.module#TitulosModule'
  },
  {
    path: 'fontes',
    component: FontesComponent,
    // loadChildren: './fontes/fontes.module#FontesModule'
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
    // loadChildren: './favoritos/favoritos.module#FavoritosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
