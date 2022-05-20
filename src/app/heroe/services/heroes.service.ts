import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private BaseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    const URL = `${this.BaseUrl}/heroe`;
    return this.http.get<Heroe[]>(URL);
  }

  getHeroePorId(id: string): Observable<Heroe> {
    const URL = `${this.BaseUrl}/heroe/${id}`;
    return this.http.get<Heroe>(URL);
  }

  getHeroeFiltroSuperHero(termino: string): Observable<Heroe[]> {
    const URL = `${this.BaseUrl}/heroe/filtro`;
    const params = new HttpParams().set('nombre', termino);
    return this.http.get<Heroe[]>(URL, { params });
  }

  insertHeroe(heroe: Heroe): Observable<Heroe> {
    const URL = `${this.BaseUrl}/heroe`;
    return this.http.post<Heroe>(URL, heroe);
  }

  updateHeroe(heroe: Heroe,id:string): Observable<Heroe> {
    const URL = `${this.BaseUrl}/heroe/${id}`;
    return this.http.put<Heroe>(URL, heroe);
  }

  deleteHeroe(id: string): Observable<any>{
    const URL = `${this.BaseUrl}/heroe/${id}`;
    return this.http.delete<any>(URL)

  }
}
