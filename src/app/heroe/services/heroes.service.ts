import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private BaseUrl : string = 'https://localhost:44383/api/'
  constructor(private http : HttpClient ) { }

  getHeroes():Observable<Heroe[]>{
    const URL = `${this.BaseUrl}heroe`;
    return this.http.get<Heroe[]>(URL);
  }
}
