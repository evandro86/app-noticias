import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  news;
  categories = [
    'Notícias do Mundo',
    'Notícias do Brasil',
    'Negócios',
    'Tecnologia',
    'Entretenimento',
    'Esporte',
    'Ciência'
  ];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category) {
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category) {
    this.noticiasService
      .obterDados(`everything?q=${category.toLowerCase()}`)
      .subscribe(data => {
        this.news = data;
      });
  }
}