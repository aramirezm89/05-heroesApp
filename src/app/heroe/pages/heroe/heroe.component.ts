import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {

  heroe! : Heroe;
  constructor(private route: ActivatedRoute, private heroeService : HeroesService) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }) => this.heroeService.getHeroePorId(id)), //switchMap toma el valor del observable anterior y debe retornar otro observable
    ).subscribe({
      next: (responseHeroe) =>{
        this.heroe = responseHeroe;
      },
      error: (err) => console.log(err)
    })
  }
}
