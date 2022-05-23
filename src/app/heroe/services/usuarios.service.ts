import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/auth/interfaces/usuario.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private BaseUrl: string = environment.baseUrl;
  constructor(private http : HttpClient) {}

  insertUsuario(usuario:Usuario):Observable<Usuario>{

    const URL = `${this.BaseUrl}/usuario`
   return  this.http.post<Usuario>(URL,usuario)
  }
}
