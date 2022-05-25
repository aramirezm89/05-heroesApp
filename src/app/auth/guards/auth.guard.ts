import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad , CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    return this.AuthService.verificarAutenticacion()
    .pipe(
      tap(response =>{
        if(!response){
         this.router.navigate(['auth/login']);
        }
      })
    )

    /* if (this.AuthService.infoUsuarioLogin.id) {
      return true;
    }

    console.log('debe estar logeado para acceder a esta ruta - CanActivate');
    return false; */
  }

  constructor(private AuthService : AuthService, private router : Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean > | boolean {

      return this.AuthService.verificarAutenticacion()
      .pipe(
        tap(response =>{
          if(!response){
             this.router.navigate(['auth/login']);
          }
        })
      )


    /*  if(this.AuthService.infoUsuarioLogin.id){
       return true
     }


    console.log('debe estar logeado para acceder a esta ruta - CanLoad')
    this.router.navigate(['auth/login'])
    return false; */

  }
}
