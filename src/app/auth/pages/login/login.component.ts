import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

usuarioLogin : UsuarioLogin = {
  usuario:'',
  pass:''
}

  constructor(private router: Router, private dialog : MatDialog, private authService : AuthService) {}

  ngOnInit(): void {}

  login() {

    if(this.usuarioLogin.usuario === '' || this.usuarioLogin.pass === ''){
      return
    }

    this.authService.login(this.usuarioLogin).subscribe({
      next: (response) =>{
        if(response){
          this.router.navigate(['/heroe']);
        }else{
          console.log('credenciales no validas.')
        }
      },
      error : (err) => console.log(err.error)
    })

  }


  crearUsuario(){
    const dialogUsuario = this.dialog.open(RegisterComponent,{
       height: '50vh',
       width:' 45vh'
    })
  }


}
