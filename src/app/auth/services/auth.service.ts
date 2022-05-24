import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario,UsuarioLogin,} from 'src/app/auth/interfaces/usuario.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private BaseUrl: string = environment.baseUrl;
  private _infoUsuarioLogin: Usuario | undefined;

  get infoUsuarioLogin() : Usuario{
    return{ ...this._infoUsuarioLogin!};
  }
  constructor(private http: HttpClient) {}

  login(usuario: UsuarioLogin): Observable<any> {
    const URL = `${this.BaseUrl}/usuario/login`;
    const params = new HttpParams()
      .set('usuario', usuario.usuario)
      .set('pass', usuario.pass);
    return this.http
      .get<any>(URL, { params })
      .pipe(tap((response) => (this._infoUsuarioLogin = response)));
  }
  insertUsuario(usuario: Usuario): Observable<Usuario> {
    const URL = `${this.BaseUrl}/usuario`;
    return this.http.post<Usuario>(URL, usuario);
  }
}
