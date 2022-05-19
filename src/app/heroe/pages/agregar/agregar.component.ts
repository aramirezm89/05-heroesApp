import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  nombreHeroe: string = '';
  publishers= [
    {
      id: 'Dc Comics',
      desc: 'DC Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics',
    },
  ];

  heroe : Heroe ={
    superhero : '',
    alter_ego : '',
    characters : '',
    first_appearance: '',
    publisher : Publisher.DCComics,
    alt_img : ''
  }
  constructor() {}

  ngOnInit(): void {}
}
