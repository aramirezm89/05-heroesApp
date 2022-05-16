import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listadoHeroes : Heroe[] = []
  constructor(private heroesService : HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe({
      next:(response) => {
        this.listadoHeroes = response
        console.log(this.listadoHeroes)
      },
      error:(err) => {
        console.log(err)
      }
    });
  }

}
