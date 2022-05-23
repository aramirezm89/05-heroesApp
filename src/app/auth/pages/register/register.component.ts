import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/heroe/services/usuarios.service';
import { Usuario } from '../../interfaces/usuario.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  usuario : Usuario = {
    usuario:'',
    pass:'',
    email:''
  }

  constructor(private usuarioService : UsuariosService) {}

  ngOnInit(): void {}

  registrarUsuario(){
    if (this.usuario.usuario === '' || this.usuario.pass === '' || this.usuario.email === '') {
      return;
    }

      this.usuarioService.insertUsuario(this.usuario).subscribe({
        next: (response) =>{
          console.log(response.usuario)
        },
        error: (err) => console.log(err.error.errors.email[0])
      })
  }
}
