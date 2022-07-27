import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,of, map } from 'rxjs';
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

  login(usuario: UsuarioLogin): Observable<Usuario> {
    const URL = `${this.BaseUrl}/usuario/login`;
    console.log(this.BaseUrl)
    return this.http
      .post<Usuario>(URL, usuario)
      .pipe(
      tap((response) => (this._infoUsuarioLogin = response)),
      tap(() => localStorage.setItem('token',this.infoUsuarioLogin.id!))
      );
  }
  logout(){
    this._infoUsuarioLogin = undefined;
  }


  verificarAutenticacion():Observable<boolean>{

    //si el localStorage no contiene el token returna false

    if(!localStorage.getItem('token')){
        return of(false);
    }

    /*la repsuesta a esta peticion get es de tipo Usurio(interfaz) pero al usuar el operador map
      el retorno lo transforme a true dado que defini que le metodo verificarAutenticacion retorne un observable
    */
     return this.http.get<Usuario>(`${this.BaseUrl}/usuario/${localStorage.getItem('token')}`)
     .pipe(
       map(reponse => {
          this._infoUsuarioLogin = reponse;
         return true
       })
     )
  }

  insertUsuario(usuario: Usuario): Observable<Usuario> {
    const URL = `${this.BaseUrl}/usuario`;
    return this.http.post<Usuario>(URL, usuario);
  }
}
