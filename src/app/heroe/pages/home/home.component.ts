import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/usuario.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) {}

  usuarioActivo : Usuario = this.authService.infoUsuarioLogin;

  ngOnInit(): void {}

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth'])
  }
}
