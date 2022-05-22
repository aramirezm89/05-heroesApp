import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private dialog : MatDialog) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/heroe']);
  }

  crearUsuario(){
    const dialogUsuario = this.dialog.open(RegisterComponent,{
       height: '50vh',
       width:' 45vh'
    })
  }
}
