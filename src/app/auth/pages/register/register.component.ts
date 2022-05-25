import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from '../../interfaces/usuario.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  usuario: Usuario = {
    usuario: '',
    pass: '',
    email: '',
  };

  mostrarPass = false;
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  registrarUsuario() {
    if (
      this.usuario.usuario === '' ||
      this.usuario.pass === '' ||
      this.usuario.email === ''
    ) {
      return;
    }

    this.authService.insertUsuario(this.usuario).subscribe({
      next: (response) => {
        this.mostrarSnackBar('Usuario creado','mat-accent')
      },
      error: (err) => this.mostrarSnackBar(err.error.errors.email[0],'mat-warn')
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
