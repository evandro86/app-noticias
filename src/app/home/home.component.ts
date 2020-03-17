import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  news: any;
  newsSubscription;

  length;
  pageSize = 8;
  page = 1;

  constructor(
    private newsService: NoticiasService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.obterDados();
  }

  obterDados() {
    this.newsSubscription = this.newsService
      .obterDados(
        `top-headlines?country=br&pageSize=${this.pageSize}&page=${this.page}`
      )
      .subscribe(data => {
        this.news = data;
        this.length = data['totalResults'];
      });
  }

  naEscolhaPagina(event) {
    console.log(event);
    this.newsSubscription = this.newsService
      .obterDados(
        `top-headlines?country=br&pageSize=${
          this.pageSize
        }&page=${event.pageIndex + 1}`
      )
      .subscribe(data => {
        this.news = data;
        this.length = data['totalResults'];
      });
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }

  noFavorito(article) {
    console.log(article);

    let items = [];
    const val = localStorage.getItem('items');

    if (val !== null) {
      items = JSON.parse(val);
    }
    items.push(article);
    localStorage.setItem('items', JSON.stringify(items));
    this.snackBar.open('Adicionado para favoritos', 'ok', {
      duration: 3000
    });
  }
}