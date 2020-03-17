import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: TitulosComponent
  }
];

@NgModule({
  declarations: [TitulosComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule]
})
export class TitulosModule { }