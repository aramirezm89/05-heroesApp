import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss'],
})
export class ConfirmarComponent implements OnInit {
  //la injection de esete servicio se utiliza para recibir la data desde el componente padre (en esete caso AgregarComponent).
  constructor(@Inject(MAT_DIALOG_DATA) public data: Heroe) {}

  ngOnInit(): void {}


}
