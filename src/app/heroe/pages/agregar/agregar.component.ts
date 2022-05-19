import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'Dc Comics',
      desc: 'DC Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics',
    },
  ];
  actualizar: boolean = false;
  idHeroeBD! : string;
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    imageId: '',
  };
  constructor(
    private route: ActivatedRoute,
    private heroeSerive: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ id }) => {
        if (id) {
          this.actualizar = true;
          this.idHeroeBD = id;
          this.heroeSerive.getHeroePorId(this.idHeroeBD).subscribe({
            next: (response) => {
              this.heroe = response;
            },
          });
        }
      },
    });
  }

  guardar() {
    if (!this.actualizar) {
      if (this.heroe.superhero.trim().length === 0) {
        return;
      }

      this.heroeSerive.insertHeroe(this.heroe).subscribe({
        next: ({ id }) => {
          console.log(id);
          if ({ id }) {
            this.router.navigate([`/heroe/ver-heroe/${id}`]);
          } else {
            console.log(
              'error de servidor, o el heroe ya se encuentra en la BD'
            );
          }
        },
        error: (err) => console.log(err),
      });

      this.heroe = {
        superhero: '',
        alter_ego: '',
        characters: '',
        first_appearance: '',
        publisher: Publisher.DCComics,
        imageId: '',
      };
    }else{

       if (this.heroe.superhero.trim().length === 0) {
         return;
       }

       this.heroeSerive.updateHeroe(this.heroe,this.idHeroeBD).subscribe({
         next: (response) => {
           console.log(response);

          this.router.navigate([`/heroe/ver-heroe/${this.idHeroeBD}`]);

         },
         error: (err) => console.log(err),
       });

       this.heroe = {
         superhero: '',
         alter_ego: '',
         characters: '',
         first_appearance: '',
         publisher: Publisher.DCComics,
         imageId: '',
       };

    }
  }
}
