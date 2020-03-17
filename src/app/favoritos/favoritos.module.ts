import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FavoritosComponent } from './favoritos.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritosComponent
  }
];

@NgModule({
  declarations: [FavoritosModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class FavoritosModule { }
