import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontesComponent } from './fontes.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: FontesComponent
  }
];

@NgModule({
  declarations: [FontesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class FontesModule { }
