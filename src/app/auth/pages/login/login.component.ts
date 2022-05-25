import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../../interfaces/usuario.interfaces';
import { AuthService } from '../../services/auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuarioLogin: UsuarioLogin = {
    usuario: '',
    pass: '',
  };
  mostrarPass = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.usuarioLogin.usuario === '' || this.usuarioLogin.pass === '') {
      return;
    }

    this.authService.login(this.usuarioLogin).subscribe({
      next: (response) => {
        if (response) {
          this.mostrarSnackBar(`Bienvenido ${response.usuario}`, 'mat-accent')
          this.router.navigate(['/heroe']);
        }
      },
      error: (err) => this.mostrarSnackBar(err.error,'mat-warn'),
    });
  }

  crearUsuario() {
    const dialogUsuario = this.dialog.open(RegisterComponent, {
      height: '50vh',
      width: ' 45vh',
      minHeight:'300px',
      minWidth:'330px',

    });
  }

  mostrarSnackBar(message: string, clase: string) {
    this.snackBar.open(message, '', {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['mat-toolbar', clase],
    });
  }
}
