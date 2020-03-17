import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-fontes',
  templateUrl: './fontes.component.html',
  styleUrls: ['./fontes.component.scss']
})
export class FontesComponent implements OnInit {
  news;
  selected;

  sources = [
    {
      id: 'globo',
      name: 'Globo'
    },
    {
      id: 'ign',
      name: 'IGN'
    },
    {
      id: 'aftenposten',
      name: 'Aftenposten'
    },
    {
      id: 'google-news',
      name: 'Google News'
    }
  ];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.selected = this.sources[0].id;
    this.getData(this.selected);
  }

  naEscolhaDaFonteDeNoticias() {
    this.getData(this.selected);
  }

  getData(selected) {
    this.noticiasService
      .obterDados(`top-headlines?sources=${selected}`)
      .subscribe(data => {
        this.news = data;
      });
  }
}
