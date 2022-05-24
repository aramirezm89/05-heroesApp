import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) {}

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
        console.log(response.usuario);
      },
      error: (err) => console.log(err.error.errors.email[0]),
    });
  }
}
