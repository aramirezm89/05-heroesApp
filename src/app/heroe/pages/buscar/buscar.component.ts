import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado : Heroe | undefined;
  sinResultados: boolean = false;
  constructor(private heroeSerive: HeroesService) {}

  ngOnInit(): void {}

  buscar() {

    this.sinResultados = false;
    this.heroeSeleccionado = undefined;

    if (this.termino.length !== 0) {
      this.heroeSerive.getHeroeFiltroSuperHero(this.termino).subscribe({
        next: (response) => {
          this.heroes = response;
          if (this.heroes.length === 0) {
            this.sinResultados = true;
          }
        },
      });
    }
  }

  opcionSeleccionada(evento: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = evento.option.value;
    this.termino = heroe.superhero;
    this.heroeSeleccionado = heroe;
  }
}
