import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  obterDados(url) {
    return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
      tap(value => {
        console.log(value);
      })
    );
  }
}
